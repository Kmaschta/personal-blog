import Head from 'next/head';
import Image from 'next/image';
import Markdown from 'react-markdown-it';

import { getPostBySlug } from '../../lib/posts';

export default function Post({ content, metadata }) {
    return (
        <div>
            <Markdown source={content} options={{ html: true }} />
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: ['2019', '01', '23', 'https-on-development'] } },
        ],
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const slug = context.params.slug.join('-');
    const { content, metadata } = getPostBySlug(slug);

    return {
        props: { content, metadata },
    };
}
