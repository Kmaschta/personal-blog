import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import Markdown from 'react-markdown-it';

import Container from '../../components/Container/Container';

import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';
import styles from './Post.module.css';

const URL = process.env.NEXT_PUBLIC_URL;

export default function Post({ content, post }) {
    useEffect(() => {
        document.querySelectorAll('code[class]').forEach((el) => {
            hljs.highlightElement(el);
        });
    }, []);

    return (
        <>
            <Head>
                <title>{post.title} | Kévin Maschtaler</title>
                {post.canonical ? (
                    <link rel="canonical" href={post.canonical} />
                ) : (
                    <link rel="canonical" href={URL + post.url} />
                )}
                <meta
                    property="og:title"
                    content={`${post.title} | Kévin Maschtaler`}
                />
                <meta property="og:url" content={URL + post.url} />
                <meta name="description" content={post.excerpt} />
                <meta property="og:image" content={URL + post.image} />
                <meta property="og:description" content={post.excerpt} />

                <meta
                    name="twitter:title"
                    content={`${post.title} | Kévin Maschtaler`}
                />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={URL + post.image} />

                <meta property="og:type" content="article" />
                <meta property="og:article:author:first_name" content="Kévin" />
                <meta
                    property="og:article:author:last_name"
                    content="Maschtaler"
                />
                <meta
                    property="og:article:author:username"
                    content="Kmaschta"
                />
                <meta property="og:article:author:gender" content="male" />
                <meta
                    property="og:article:published_time"
                    content={post.date}
                />
                {(post.tags || []).map((tag) => (
                    <meta
                        key={tag}
                        property="og:article:author:tag"
                        content={tag}
                    />
                ))}
            </Head>
            <div className={styles.postHeader}>
                <Image
                    src={post.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={post.blurImage}
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
    const { content, metadata } = await getPostBySlug(slug);

    return {
        props: { content, post: metadata },
    };
}
