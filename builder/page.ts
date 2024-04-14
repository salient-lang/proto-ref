import { readFile, writeFile } from "fs/promises";
import { Path2Name, Reroute } from "./helper";

export async function CreatePage(toolbar: string, path: string) {
	const extIndex = path.lastIndexOf(".");
	const ext = path.slice(extIndex);
	if (ext != ".md") return;

	const data = await readFile(path, "utf8");
	const { html, type } = RenderPage(path, data);

	const document = `<!DOCTYPE html>
<html>
	<head>
		<title>${Path2Name(path)}</title>
		<link rel="stylesheet" href="/main.css"/>
		<script src="/index.js"></script>
	</head>
	<body>
		${toolbar}
		<div class="dashboard">
			<details class="entry" style="view-transition-name: ${Reroute(path).replaceAll("/", "_")}" data-src="${Reroute(path)}" onclick="AnimateDetailsChange(event);">`
				+ html
			+`</details>
		</div>
	</body>
</html>`;

	writeFile(`./public/${path.slice(7, extIndex)}.html`, document);

	return type;
}


export async function CreateFolderPage(toolbar: string, path: string) {
	const html = `<!DOCTYPE html>
<html>
	<head>
		<title>${Path2Name(path)}</title>
		<link rel="stylesheet" href="/main.css"/>
		<script src="/index.js"></script>
	</head>
	<body>
		${toolbar}
		<div class="dashboard"></div>
	</body>
</html>`;

	writeFile(`./public/${path.slice(7) || "index"}.html`, html);
}



function RenderPage(path: string, data: string) {
	const pathFrag = path.split("/");
	const { summary, details } = IngestPage(data);

	const html = `<summary>`
		+ `<span class="comment">${pathFrag.slice(2, -1).join("/")}</span>`
		+ `<div>`
			+ `<div class="signature">`
				+ `<span class="name">${Path2Name(pathFrag[pathFrag.length-1])}</span> `
				+ (summary.type == "structure" ? "{" : "(")
				+ `<div class="cluster">`
					+ summary.params.map(p => `<div class="indent">`
						+`<span class="argument">${p.name}</span>`
						+`: ${p.type}`
						+ `<span class="comment" style="margin-left: 1em;">${p.description}</span>`
					+`</div>`).join("")
				+ `</div>`
				+ (summary.type == "function"
					? ("): "
						+ `<div style="display: inline-block;">${summary.returns.map(p => `<div>`
							+`<span class="argument">${p.name}</span>`
							+`: ${p.type}`
							+ `<span class="comment" style="margin-left: 1em;">&nbsp;${p.description}</span>`
						+`</div>`).join("")}</div>`
					) : "}")
			+ `</div>`
		+ `</div>`
		+ `<div class="close" onclick="CloseEntry(event, this);">Close</div>`
		+ `<div style="white-space: pre-wrap;">${summary.text}</div>`
	+ `</summary>`
	+ `<div style="white-space: pre-wrap;">${details}</div>`;

	return { html, type: summary.type };
}


type TypeDefMap = Map<string, string>;
function IngestPage(data: string) {
	const [primary, ...secondary] = data.split(`\n---\n`);

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
			case "@typedef" : {
				IngestTypedef(definitions, rest);
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
			text: summary
		},
		details: secondary
	}
}


function SplitString(str: string, pivot: string) {
	let index = str.indexOf(pivot);
	if (index === -1) index = str.length;

	return [ str.slice(0, index), str.slice(index+pivot.length) ];
}

function ProcessSignatureLine(ctx: TypeDefMap, line: string) {
	const [ name, line1 ] = SplitString(line, ": ");
	const [ typeStr, description ] = SplitString(line1, " - ");

	const type = ctx.has(typeStr)
		? `<a class="type" href="${ctx.get(typeStr)}" entry>${typeStr}</a>`
		: `<span class="type">${typeStr}</span>`;

	return { name, type, description }
}

function IngestTypedef(ctx: TypeDefMap, line: string) {
	const [ type, href ] = SplitString(line, " ");
	ctx.set(type, href);
}