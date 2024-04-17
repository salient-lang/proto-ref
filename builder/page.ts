import { readFile, writeFile } from "fs/promises";
import { Path2Name, Reroute, SplitString } from "./helper";
import { AddIndex } from "./search";
import { RenderMarkdown } from "./markdown";


const search = `<div id="search">
	<div>
		<input id="search-input"
			type="text" name="q"
			placeholder="type..."
			aria-labelledby="Search"
			autoComplete="off"
		/>
		<div class="placeholder">Search</div>
	</div>
	<div class="results"></div>
</div>`;

export async function CreatePage(toolbar: string, path: string) {
	const extIndex = path.lastIndexOf(".");
	const ext = path.slice(extIndex);
	if (ext != ".md") return;

	const name = Path2Name(path);
	const href  = Reroute(path);

	const data = await readFile(path, "utf8");
	const { html, type } = RenderPage(path, data);

	AddIndex({ href, name, text: data });

	const document = `<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>${name}</title>
		<meta property="og:title" content="${name}"/>
		<link rel="stylesheet" href="/main.css"/>
		<script src="/index.js"></script>
	</head>
	<body>
		${toolbar}
		<div class="dashboard">
			${search}
			<div class="stash">
				<div class="entry" style="view-transition-name: ${href.replaceAll("/", "_")}" data-src="${href}" open>`
					+ html
				+`</div>
			</div>
		</div>
	</body>
</html>`;

	writeFile(`./public/${path.slice(7, extIndex)}.html`, document);

	return type;
}


export async function CreateFolderPage(toolbar: string, path: string) {
	const name = Path2Name(path);
	const html = `<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>${name}</title>
		<meta property="og:title" content="${name}"/>
		<link rel="stylesheet" href="/main.css"/>
		<script src="/index.js"></script>
	</head>
	<body>
		${toolbar}
		<div class="dashboard">${search}<div class="stash"></div></div>
	</body>
</html>`;

	writeFile(`./public/${path.slice(7) || "index"}.html`, html);
}



function RenderPage(path: string, data: string) {
	const pathFrag = path.split("/").slice(2);
	const { summary, details } = IngestPage(data);

	const html = `<div class="expander" onclick="Expander(event)">`
		+ `<span class="comment">${pathFrag.slice(0, -1).join("/")}</span>`
		+ `<a class="inline-details" title="Link" href="/${pathFrag.join("/")}" entry>🔗</a>`
		+ `<a class="inline-details" title="Open Folder" href="/${pathFrag.slice(0, -1).join("/")}" folder>📂</a>`
		+ `<div style="flex-grow: 1;"></div>`
		+ `<div class="close" onclick="CloseEntry(event, this);">Close</div>`
	+ `</div>`
		+ `<div style="white-space: pre-wrap;">${summary.text}</div>`
		+ `<div>`
			+ `<div class="signature">`
				+ `<span class="name">${Path2Name(pathFrag[pathFrag.length-1])}</span> `
				+ (summary.type == "structure" ? "{" : "(")
				+ `<div class="cluster">`
					+ summary.params.map(p => ``
						+ `<span class="argument">${p.name}</span>`
						+ `<span>: <span>${p.type}</span></span>`
						+ `<span class="comment inline-details">${p.description}</span>`
					+``).join("")
				+ `</div>`
				+ (summary.type == "function"
					? (") => "
						+ `<div style="display: inline-block;">${summary.returns.map(p => ``
							+ `<span class="argument">${p.name}</span>`
							+ `<span>: <span>${p.type}</span></span>`
							+ `<span class="comment inline-details">&nbsp;${p.description}</span>`
						).join("")}</div>`
					) : "}")
			+ `</div>`
		+ `</div>`
	+ `<div class="details">${RenderMarkdown(details)}</div>`;

	return { html, type: summary.type };
}


export type TypeDefMap = Map<string, string>;
function IngestPage(data: string) {
	const [primary, secondary] = SplitString(data, `\n---\n`);

	let definitions = new Map<string, string>();
	let type = "function";
	let summary = "";
	let params  = new Array<ReturnType<typeof ProcessSignatureLine>>();
	let returns = new Array<ReturnType<typeof ProcessSignatureLine>>();
	for (const line of primary.split("\n")) {
		if (line[0] !== "@") {
			summary += "\n" + line;
			continue;
		}

		const [key, rest] = SplitString(line, " ");
		switch (key) {
			case "@param": {
				params.push(ProcessSignatureLine(definitions, rest));
				break;
			}
			case "@return" : {
				returns.push(ProcessSignatureLine(definitions, rest));
				break;
			}
			case "@refer" : {
				IngestReferal(definitions, rest);
				break;
			}
			case "@function": {
				type = "function";
				break;
			}
			case "@structure": {
				type = "structure";
				break;
			}
			default:
				console.error(`Unknown key ${key}`);
				summary += `\n${key} ${rest}`;
		}
	}

	return {
		summary: {
			type,
			params, returns,
			text: summary.slice(1)
		},
		details: secondary
	}
}

function ProcessSignatureLine(ctx: TypeDefMap, line: string) {
	const [ name, line1 ] = SplitString(line, ": ");
	const [ typeStr, description ] = SplitString(line1, " - ");

	const type = ctx.has(typeStr)
		? `<a class="type" href="${ctx.get(typeStr)}" entry>${typeStr}</a>`
		: `<span class="type">${typeStr}</span>`;

	return { name, type, description }
}

function IngestReferal(ctx: TypeDefMap, line: string) {
	const [ type, href ] = SplitString(line, " ");
	ctx.set(type, href);
}