export async function TransitionStart() {
	return new Promise<void>((res) => {
		const d = (document as any);
		if (typeof d.startViewTransition === "function") return d.startViewTransition(res);
		res();
	});
}