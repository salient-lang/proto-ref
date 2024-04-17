import lunr from "lunr";

function Focus(ev: FocusEvent) {
	if (!(ev.target instanceof HTMLInputElement)) return;
	ev.target.value = "";
}

let resultsElm: HTMLDivElement;
let searchElm: HTMLInputElement;
let loading = false;
let timer: NodeJS.Timeout;
let index: lunr.Index;
const naming: Map<string, {
	name: string,
	type: string
}> = new Map();

async function PreloadIndex() {
	if (loading) return;
	loading = true;

	const req = await fetch("/search.json");
	if (!req.ok) throw new Error(req.statusText);

	const json = await req.json();
	console.info("Loaded search index", json.length);

	index = lunr(function () {
		this.ref('href');
		this.field('href');
		this.field('name');
		this.field('text');

		for (const item of json) {
			naming.set(item.href, {
				name: item.name,
				type: item.type
			});
			this.add(item);
		}
	});
}

function Keypress(ev: KeyboardEvent) {
	if (!(ev.target instanceof HTMLInputElement)) return;

	if (ev.key === "Escape") {
		ev.target.blur();
		return;
	}

	if (ev.key === "Enter") {
		ev.stopImmediatePropagation();
		ev.stopPropagation();
		ev.preventDefault();
		OpenSelection();
		return;
	}

	let move = 0;
	if (ev.key === "ArrowDown") move = -1;
	if (ev.key === "ArrowUp")   move =  1;
	if (move !== 0) {
		ev.stopImmediatePropagation();
		ev.stopPropagation();
		ev.preventDefault();
		MoveSelection(move);
		return;
	}

	PreloadIndex();

	if (timer) clearTimeout(timer);
	timer = setTimeout(Search, 200);
}

function Search() {
	if (!index) {
		timer = setTimeout(Search, 400);
		return;
	};

	const res = index.search(`*${searchElm.value}*`);

	if (!resultsElm) return;
	resultsElm.innerHTML = "";

	for (const opt of res) {
		const ref = naming.get(opt.ref);

		const line = document.createElement("a");
		line.className = "result";
		line.href = opt.ref;
		line.setAttribute("entry", "true");

		const name = document.createElement("span");
		name.innerText = ref?.name || "Unknown";
		if (ref) name.className = ref.type === "function" ? "name" : "type";
		line.appendChild(name);

		const ctx = document.createElement("span");
		ctx.innerText = opt.ref.split("/").slice(0, -1).join("/");
		ctx.className = "comment";
		line.appendChild(ctx);

		resultsElm.appendChild(line);
	}
}

function MoveSelection(delta: number) {
	const i = [...resultsElm.children].findIndex(v => v.hasAttribute("selected"));
	if (0 <= i) resultsElm.children[i].removeAttribute("selected");

	const j = Math.min(Math.max(0, i-delta), resultsElm.children.length-1);
	resultsElm.children[j].setAttribute("selected", "true");
}

function OpenSelection() {
	const i = Math.max(0, [...resultsElm.children].findIndex(v => v.hasAttribute("selected")));

	const item = resultsElm.children[i];
	if (!item) return;

	item.removeAttribute("selected");
	(window as any).OpenEntry(item.getAttribute("href") || "", item);
	searchElm.blur();
}

export function Bind() {
	const a = document.querySelector("#search .results");
	if (!(a instanceof HTMLDivElement)) throw new Error("Missing search results div");
	resultsElm = a;

	const b = document.getElementById("search-input");
	if (!(b instanceof HTMLInputElement)) throw new Error("Missing search box");
	searchElm = b;

	searchElm.addEventListener("keyup", Keypress);
	searchElm.addEventListener("focus", Focus);
}
