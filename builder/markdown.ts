import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
	// html: true,     // Enable HTML tags in source
	// linkify: true,  // Autoconvert URL-like text to links
});


// Function to handle custom syntax {@type ???}
function TypeInsert(md: MarkdownIt) {
	// Regex to match {@type ???}
	const typeRegex = /\{@type ([^\}]+)\}/g;

	md.core.ruler.push('custom_type', (state) => {
		state.tokens.forEach(token => {
			if (token.type === 'inline' && token.children) {
				token.children.forEach(child => {
					if (child.type === 'text') {
						child.content = child.content.replace(typeRegex, (match, typeName) => {
							// determine url from context
							return `<a href="/types/${typeName}">${typeName}</a>`;
						});
					}
				});
			}
		});
	});
}

// md.use(TypeInsert);

export function RenderMarkdown(source: string) {
	return md.render(source);
}