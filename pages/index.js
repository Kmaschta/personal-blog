import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';

import Container from '../components/Container/Container';
import { getAllPosts } from '../lib/posts';
import styles from './Homepage.module.css';

const ADJECTIVES = [
    'reliable',
    'efficient',
    'trustworthy',
    'safe',
    'responsive',
];

export default function Home({ latestPost: post }) {
    const [adjective, setAdjective] = useState(ADJECTIVES[0]);

    useEffect(() => {
        let adjectiveIndex = 0;

        const TYPING_SPEED = 50;

        const interval = setInterval(() => {
            const currentAdjective = ADJECTIVES[adjectiveIndex];

            currentAdjective.split('').forEach((_, i) => {
                const word = currentAdjective.slice(0, (i + 1) * -1);

                setTimeout(() => {
                    setAdjective(word);

                    if (i === currentAdjective.length - 1) {
                        adjectiveIndex =
                            (adjectiveIndex + 1) % ADJECTIVES.length;
                        const newAdjective = ADJECTIVES[adjectiveIndex];

                        Array.from({ length: 4 }).forEach((_, j) => {
                            setTimeout(() => {
                                setAdjective(j % 2 === 0 ? '|' : '');
                            }, 500 * j);
                        });

                        newAdjective.split('').forEach((_, i) => {
                            const word = newAdjective.slice(0, i + 1);
                            setTimeout(() => {
                                setAdjective(word);
                            }, 2010 + TYPING_SPEED * (i + 1));
                        });
                    }
                }, TYPING_SPEED * (i + 1));
            });
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [setAdjective]);

    return (
        <>
            <section className={styles.section}>
                <div>
                    <Container text>
                        <p className={styles.preIntro}>Hi internet, I{"'"}m</p>
                        <h1 className={styles.name}>Kévin Maschtaler</h1>
                        <h2 className={styles.line}>
                            I{"'"}m making the web more <span>{adjective}</span>
                        </h2>
                        <p>
                            Software Engineer for 10 years, I specialized in
                            Platform and Reliability.
                            <br />
                            Currently, I’m leading the Engineering Operations at{' '}
                            <Link href="https://www.tint.ai/">
                                <a>Tint</a>
                            </Link>
                            .
                        </p>
                        <p>
                            [LinkedIn] | [GitHub] | [Twitter] | [Keybase] |
                            [RSS]
                        </p>
                    </Container>
                </div>
            </section>
            <section>
                <div>
                    <Container text noPadding>
                        <div className={styles.postHeading}>
                            <div>
                                <h3>Latest blog post</h3>
                            </div>
                            <div>
                                <Link href="/blog">see other ones</Link>
                            </div>
                        </div>
                    </Container>
                    <Container noPadding>
                        <Card
                            key={post.url}
                            title={post.title}
                            href={post.url}
                            image={
                                <Image
                                    src={post.image}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                />
                            }
                        >
                            <p>{post.excerpt}</p>
                            <div>
                                <code>
                                    {new Intl.DateTimeFormat('en-US', {
                                        dateStyle: 'medium',
                                    }).format(new Date(post.date))}
                                </code>
                                {(post.tags || []).length > 0 ? ' | ' : null}
                                {(post.tags || []).map((tag) => (
                                    <code key={tag}>#{tag}</code>
                                ))}
                            </div>
                        </Card>
                    </Container>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts().map((post) => ({
        ...post,
        date: new Date(post.date),
    }));

    posts.sort((a, b) => b.date - a.date);

    const latestPost = {
        ...posts[0],
        date: posts[0].date.toISOString(),
    };

    return {
        props: {
            latestPost,
        },
    };
}
