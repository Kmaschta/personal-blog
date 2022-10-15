import { useEffect } from 'react';
import Image from 'next/image';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import Markdown from 'react-markdown-it';

import Container from '../../components/Container/Container';

import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';
import styles from './Post.module.css';

export default function Post({ content, post }) {
    useEffect(() => {
        document.querySelectorAll('code[class]').forEach((el) => {
            hljs.highlightElement(el);
        });
    }, []);

    return (
        <>
            <div className={styles.postHeader}>
                <Image
                    src={post.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.postTitleContainer}>
                    <Container text>
                        <h1>{post.title}</h1>
                        <div>
                            {new Intl.DateTimeFormat('en-US', {
                                dateStyle: 'medium',
                            }).format(new Date(post.date))}
                        </div>
                    </Container>
                </div>
            </div>
            <Container text>
                <Markdown source={content} options={{ html: true }} />
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs().map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const slug = context.params.slug.join('-');
    const { content, metadata } = getPostBySlug(slug);

    return {
        props: { content, post: metadata },
    };
}
