export type SearchItem = { href: string, name: string, text: string };
const index = new Array<SearchItem>();

export function AddIndex(item: SearchItem) {
	index.push(item);
}

export function Jsonify() {
	return JSON.stringify(index);
}