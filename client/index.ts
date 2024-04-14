import { TransitionStart } from "./helper";
import * as Search from "./search";

const parser = new DOMParser();

function AnyClick(ev: MouseEvent) {
	if (!(ev.target instanceof HTMLAnchorElement)) return;

	const href = ev.target.getAttribute("href") || "";
	if (!href) return;

	if (ev.target.hasAttribute("entry")) {
		ev.stopImmediatePropagation();
		ev.stopPropagation();
		ev.preventDefault();

		OpenEntry(href, ev.target);
		return;
	}

	if (ev.target.hasAttribute("folder")) {
		ev.stopImmediatePropagation();
		ev.stopPropagation();
		ev.preventDefault();

		OpenFolder(href);
		return;
	}
}

async function OpenEntry(href: string, caller?: HTMLElement) {
	const stash = document.querySelector(".stash");
	if (!stash) throw new Error("Missing stash element");

	const existing = FindOpenEntry(href);

	const req = await fetch(href);
	if (!req.ok) throw new Error(`Failed to load ${href}`);

	const doc = parser.parseFromString(await req.text(), "text/html");
	const entry = doc.querySelector(".entry");

	if (!entry) throw new Error("Route is missing div.entry");

	if (!existing && caller) caller.style.setProperty('view-transition-name', href.replaceAll("/", "_"));
	await TransitionStart();
	if (existing) existing.remove();
	if (caller) caller.style.removeProperty('view-transition-name');
	stash.insertBefore(entry, stash.firstChild);
	stash.scrollTo({top: 0});

	const title = doc.querySelector("title")?.innerText || document.title;
	history.replaceState({}, title, href);
	document.title = title;

	Save();
}

function FindOpenEntry(href: string) {
	for (const div of document.body.querySelectorAll(".entry")) {
		if (div.getAttribute("data-src") == href) return div;
	}

	return null;
}


async function OpenFolder(href: string) {
	const current = document.querySelector(".toolbar");
	if (!current) throw new Error("Missing stash element");

	const req = await fetch(href);
	if (!req.ok) throw new Error(`Failed to load ${href}`);

	const doc = parser.parseFromString(await req.text(), "text/html");
	const toolbar = doc.querySelector(".toolbar");

	if (!toolbar) throw new Error("Route is missing div.toolbar");

	await TransitionStart();
	current.replaceWith(toolbar);

	const title = doc.querySelector("title")?.innerText || document.title;
	history.replaceState({}, title, href);
	document.title = title;
}


function Save() {
	const pages = [ ...document.body.querySelectorAll(".entry") ]
		.map(x => x.getAttribute("data-src"))
		.filter(x => x);

	localStorage.setItem("open-pages", pages.join("\n"));
}





async function Expander(ev: MouseEvent) {
	if (!(ev.target instanceof HTMLElement)) return;
	if (ev.target instanceof HTMLAnchorElement) return;
	const elm = ev.target.closest(".entry");
	if (!elm) return;

	ev.stopImmediatePropagation();
	ev.stopPropagation();
	ev.preventDefault();

	await TransitionStart();

	if (elm.hasAttribute("open")) elm.removeAttribute("open");
	else elm.setAttribute("open", "true");
}
(window as any).Expander = Expander;

async function CloseEntry(ev: MouseEvent, closeBtn: HTMLDivElement) {
	ev.stopImmediatePropagation();
	ev.stopPropagation();
	ev.preventDefault();

	await TransitionStart();

	const entry = closeBtn.closest(".entry");
	if (!entry) return;

	entry.remove();
	Save();
}
(window as any).CloseEntry = CloseEntry;


async function Startup() {
	document.body.addEventListener("click", AnyClick);

	const pages = (localStorage.getItem('open-pages') || "").split("\n").reverse();
	for (const page of pages) {
		await OpenEntry(page);
	}

	Search.Bind();
}

window.addEventListener("load", Startup);