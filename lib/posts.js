import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';

const rootFolder = path.join(
    __dirname,
    fs.existsSync(path.join(__dirname, '../../chunks/'))
        ? '../../chunks/'
        : '../../'
);

export const getAllPostSlugs = () => {
    const files = fs
        .readdirSync(rootFolder + 'posts')
        .filter((post) => post.endsWith('.md'));

    return files.map((file) => {
        const [fileName] = file.split('.', 1);
        const [year, month, day, ...rest] = fileName.split('-');
        return [year, month, day, rest.join('-')];
    });
};

export const getAllPosts = () => {
    const slugs = getAllPostSlugs();

    return slugs.map((slug) => {
        const { default: fileName } = require(`../posts/${slug.join('-')}.md`);

        const content = fs.readFileSync(
            rootFolder + fileName.replace('/_next/', ''),
            { encoding: 'utf-8' }
        );

        const { metadata } = parseMD(content);
        return { ...metadata, url: `/blog/${slug.join('/')}` };
    });
};

export const getPostBySlug = (slug) => {
    const { default: fileName } = require(`../posts/${slug}.md`);

    const content = fs.readFileSync(
        rootFolder + fileName.replace('/_next/', ''),
        { encoding: 'utf-8' }
    );

    return parseMD(content);
};
