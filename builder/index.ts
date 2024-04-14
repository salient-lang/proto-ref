import { CreateFolderPage, CreatePage } from "./page";
import { readdir, stat, mkdir, writeFile } from "fs/promises";
import { CreateToolbar } from "./toolbar";
import * as Search from "./search";

console.info("Building Docs...");


async function GroupPaths (paths: string[]) {
	const stats = await Promise.all(paths.map( x => stat(x)));

	return {
		folders: paths.filter((_, i) => !stats[i].isFile()),
		files:   paths.filter((_, i) =>  stats[i].isFile())
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
	const toolbar = CreateToolbar(path, folders, files);
	await Promise.all(files.map(f => CreatePage(toolbar, f)));
	await CreateFolderPage(toolbar, path);

	await Promise.all(folders.map(BuildDir));


	writeFile("./public/search.json", Search.Jsonify());
}


BuildDir("./docs");