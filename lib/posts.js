import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';

export const getPostBySlug = (slug) => {
    const { default: fileName } = require(`../posts/${slug}.md`);

    const content = fs.readFileSync(
        path.resolve(__dirname, '../../' + fileName.replace('/_next/', '')),
        { encoding: 'utf-8' }
    );

    return parseMD(content);
};
