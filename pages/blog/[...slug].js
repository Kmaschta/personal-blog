import Markdown from 'react-markdown-it';
import Container from '../../components/Container/Container';

import { getPostBySlug } from '../../lib/posts';

export default function Post({ content, metadata }) {
    return (
        <Container text>
            <Markdown source={content} options={{ html: true }} />
        </Container>
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
