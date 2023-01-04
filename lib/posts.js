import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';
import { getPlaiceholder } from 'plaiceholder';

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

export const getAllPosts = async () => {
    const slugs = getAllPostSlugs();

    return Promise.all(
        slugs.map(async (slug) => {
            const { default: fileName } = require(`../posts/${slug.join(
                '-'
            )}.md`);

            const content = fs.readFileSync(
                rootFolder + fileName.replace('/_next/', ''),
                { encoding: 'utf-8' }
            );

            const { metadata } = parseMD(content);

            const blurImage = (await getPlaiceholder(metadata.image)).base64;

            return { ...metadata, blurImage, url: `/blog/${slug.join('/')}` };
        })
    );
};

export const getPostBySlug = async (slug) => {
    const { default: fileName } = require(`../posts/${slug}.md`);

    const rawContent = fs.readFileSync(
        rootFolder + fileName.replace('/_next/', ''),
        { encoding: 'utf-8' }
    );

    const { content, metadata } = await parseMD(rawContent);
    const blurImage = (await getPlaiceholder(metadata.image)).base64;

    return { content, metadata: { blurImage, ...metadata } };
};
