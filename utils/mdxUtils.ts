import fs from 'fs';
import path from 'path';

export const PROJECTS_PATH = path.join(process.cwd(), 'markdown', 'projects');

export const projectFilePaths = fs
    .readdirSync(PROJECTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));
