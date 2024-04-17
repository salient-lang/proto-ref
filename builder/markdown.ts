import MarkdownIt from 'markdown-it';
import { TypeDefMap } from './page';

const md = new MarkdownIt({
	html: true,     // Enable HTML tags in source
	// linkify: true,  // Autoconvert URL-like text to links
});

const typeRegex = /\{@(type|function) ([^\}]+)\}/g;
export function RenderMarkdown(ctx: TypeDefMap, source: string) {
	return md.render(source.replace(typeRegex, (match, mode, typeName) => {
		console.log(12, mode, typeName);
		const href = ctx.get(typeName);
		if (!href) return typeName;

		return `<a class="${mode === "type" ? "type" : "name"}" href="${href}" entry>${typeName}</a>`;
	}));
}