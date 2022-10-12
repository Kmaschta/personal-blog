const fs = require('fs');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        return {
            ...config,
            entry: async () => {
                const entries = await config.entry();
                const posts = fs.readdirSync(path.join(__dirname, './posts'));

                const postEntries = posts.reduce((acc, post) => {
                    acc[`posts/${post}`] = path.join(__dirname, 'posts', post);
                    return acc;
                }, {});

                return Object.assign({}, entries, postEntries);
            },
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: /posts\/.*\.md$/,
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[contenthash].[ext]',
                        },
                    },
                ],
            },
        };
    },
};

module.exports = nextConfig;
