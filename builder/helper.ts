export function Path2Name(path: string) {
	let startIndex = path.lastIndexOf("/");
	if (startIndex !== 0 || path[0] !== "/") startIndex++;

	let endIndex = path.indexOf(".", startIndex);
	if (endIndex === -1) endIndex = path.length;

	const filename = path
		.slice(startIndex, endIndex)
		.replaceAll("-", " ");

	return filename;
}

export function Reroute(path: string) {
	let endIndex = path.lastIndexOf(".");
	if (endIndex === 0) endIndex = path.length;

	return `/${path.startsWith("./docs")
		? path.slice(7, endIndex)
		: path
	}`;
}


export function SplitString(str: string, pivot: string) {
	let index = str.indexOf(pivot);
	if (index === -1) index = str.length;

	return [ str.slice(0, index), str.slice(index+pivot.length) ];
}