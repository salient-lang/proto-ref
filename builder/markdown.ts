import MarkdownIt from 'markdown-it';
import { TypeDefMap } from './page';

const md = new MarkdownIt({
	html: true, // Enable HTML tags in source
});

const typeRegex = /\{@(type|function) ([^\}]+)\}/g;
export function RenderMarkdown(ctx: TypeDefMap, source: string) {
	return md.render(source.replace(typeRegex, (match, mode, typeName) => {
		const href = ctx.get(typeName);
		if (!href) return typeName;

		return `<a class="${mode === "type" ? "type" : "name"}" href="${href}" entry>${typeName}</a>`;
	}));
}