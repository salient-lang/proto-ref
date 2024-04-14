import lunr from "lunr";

function Focus(ev: FocusEvent) {
	if (!(ev.target instanceof HTMLInputElement)) return;
	ev.target.value = "";
}

let searchElm: HTMLInputElement;
let loading = false;
let timer: NodeJS.Timeout;
let index: lunr.Index;
const naming = new Map<string, string>();

async function PreloadIndex() {
	if (loading) return;
	loading = true;

	const req = await fetch("/search.json");
	if (!req.ok) throw new Error(req.statusText);

	const json = await req.json();
	console.log("Loaded search index", json);

	index = lunr(function () {
		this.ref('href');
		this.field('href');
		this.field('name');
		this.field('text');

		for (const item of json) {
			naming.set(item.href, item.name);
			this.add(item);
		}
	});
}

function Keypress(ev: KeyboardEvent) {
	if (!(ev.target instanceof HTMLInputElement)) return;

	PreloadIndex();

	if (timer) clearTimeout(timer);
	timer = setTimeout(Search, 200);
}

function Search() {
	if (!index) {
		timer = setTimeout(Search, 400);
		return;
	};

	const res = index.search(searchElm.value+"*");
	console.log(res);

	const results = document.querySelector("#search .results");
	if (!results) return;
	results.innerHTML = "";

	for (const opt of res) {
		const elm = document.createElement("a");
		elm.className = "result";
		elm.innerText = naming.get(opt.ref) || "Unknown";
		elm.href = opt.ref;
		elm.setAttribute("entry", "true");

		const ctx = document.createElement("span");
		ctx.innerText = opt.ref.split("/").slice(0, -1).join("/");
		ctx.className = "comment";
		elm.appendChild(ctx);

		results.appendChild(elm);
	}
}

export function Bind() {
	const elm = document.getElementById("search-input");
	if (!(elm instanceof HTMLInputElement)) throw new Error("Missing search box");
	searchElm = elm;

	searchElm.addEventListener("keyup", Keypress);
	searchElm.addEventListener("focus", Focus);
}
