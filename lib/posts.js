import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';

export const getPostBySlug = (slug) => {
    const { default: fileName } = require(`../posts/${slug}.md`);

    const folder = fs.existsSync(path.join(__dirname, '../../chunks/'))
        ? '../../chunks/'
        : '../../';

    const content = fs.readFileSync(
        path.resolve(__dirname, folder + fileName.replace('/_next/', '')),
        { encoding: 'utf-8' }
    );

    return parseMD(content);
};
