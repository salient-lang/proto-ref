import { CreateFolderPage, RenderInnerPage, WritePage } from "./page";
import { readdir, stat, mkdir, writeFile } from "fs/promises";
import { CreateToolbar } from "./toolbar";
import * as Search from "./search";

console.info("Building Docs...");


async function GroupPaths (paths: string[]) {
	const stats = await Promise.all(paths.map( x => stat(x)));

	return {
		folders: paths.filter((_, i) => !stats[i].isFile()),
		files:   paths.filter((f, i) =>  stats[i].isFile() && f.endsWith(".md"))
	}
}

async function BuildDir(path: string) {
	const paths = await readdir(path);
	paths.sort();


	for (let i=0; i<paths.length; i++) {
		paths[i] = `${path}/${paths[i]}`;
	}

	if (path !== "./docs") await mkdir(`./public/${path.slice(7)}`, { recursive: true });

	const { files, folders } = await GroupPaths(paths);
	const pageFragments = await Promise.all(files.map(RenderInnerPage));
	const toolbar = CreateToolbar(path, folders, pageFragments);

	await Promise.all(pageFragments.map(f => WritePage(f, toolbar)));
	await CreateFolderPage(toolbar, path);

	await Promise.all(folders.map(BuildDir));


	writeFile("./public/search.json", Search.Jsonify());
}


BuildDir("./docs");