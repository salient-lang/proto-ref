import MarkdownIt from 'markdown-it';
import { TypeDefMap } from './page';

const md = new MarkdownIt({
	html: true,     // Enable HTML tags in source
	// linkify: true,  // Autoconvert URL-like text to links
});

// Function to handle custom syntax {@type ???}
function TypeInsert(md: MarkdownIt) {
	// Regex to match {@type ???}


	md.core.ruler.push('custom_type', (state) => {
		state.tokens.forEach(token => {
			if (token.type !== 'inline' || !token.children) return;

			token.children.forEach(child => {
				if (child.type !== 'text') return;

				child.content = child.content.replace(typeRegex, (match, typeName) => {
					// determine url from context
					return `<a href="/types/${typeName}">${typeName}</a>`;
				});
			});
		});
	});
}

md.use(TypeInsert);

const typeRegex = /\{@type ([^\}]+)\}/g;
export function RenderMarkdown(ctx: TypeDefMap, source: string) {
	return md.render(source.replace(typeRegex, (match, typeName) => {
		const href = ctx.get(typeName);
		if (!href) return typeName;

		return `<a class="type" href="${href}" entry>${typeName}</a>`;
	}));
}