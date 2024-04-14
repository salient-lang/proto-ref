import { Path2Name, Reroute } from "./helper";

export function CreateToolbar(href: string, folders: string[], files: string[]) {

	const pathFrags = href.split("/").slice(2); // ignore ./docs
	const parents = pathFrags.map((x, i) => i == 0
		? {
			name: Path2Name(x),
			path: `/${x}`,
		} : {
			name: Path2Name(x),
			path: `/${pathFrags[i-1]}/${x}`,
		}
	);

	return `<div class="toolbar" style="display: flex; flex-direction: column;">
	${href !== "./docs" ? `<a href="/" parent folder> Index</a>` : ""}
	${parents.map(x =>
	`<a href="${x.path}" parent folder>
		${x.name}
	</a>`).join("\n\t")}

	${folders.map(x =>
	`<a href="${Reroute(x)}" folder>
		${Path2Name(x)}
	</a>`).join("\n\t")}

	${files.map(x =>
	`<a href="${Reroute(x)}" entry>
		${Path2Name(x)}
	</a>`).join("\n\t")}
</div>`;
}