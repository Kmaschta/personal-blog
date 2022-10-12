/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /posts\/.*\.md$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[contenthash].[ext]',
            },
        });
        return cfg;
    },
};

module.exports = nextConfig;
