import { readdir, mkdir } from "node:fs/promises";
import html from 'bun-plugin-html'

export default async function build() {
    //copy folders recursively from ./src/assets to ./docs/assets 
    const files = await readdir("./src/assets", { recursive: true });
    for (const file of files) {
        if (file.indexOf(".") < 0) {
            await mkdir("./docs/assets/" +  file, { recursive: true });
        } else {
            await Bun.write("./docs/assets/" + file, await Bun.file("./src/assets/" + file));
        }
    }
    await Bun.build({
        entrypoints: ['./src/index.html'],
        outdir: './docs',
        minify: true,
        plugins: [
            html()
        ],
    })
}