import Image from 'next/image';
import Link from 'next/link';

import { getAllPosts } from '../../lib/posts';
import Container from '../../components/Container/Container';
import styles from './blog.module.css';

export default function Blog({ postsByYear }) {
    return (
        <Container>
            {Object.entries(postsByYear)
                .sort((a, b) => parseInt(b[0], 0) - parseInt(a[0], 0))
                .map(([year, posts]) => (
                    <div key={year}>
                        <h2>{year}</h2>
                        {posts.map((post) => (
                            <Link key={post.url} href={post.url}>
                                <a className={styles.postLink}>
                                    <article className={styles.post}>
                                        <div
                                            className={styles.postIllustration}
                                        >
                                            <Image
                                                src={post.image}
                                                alt=""
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className={styles.postDescription}>
                                            <h3>{post.title}</h3>
                                            <p>{post.excerpt}</p>
                                            <div>
                                                {(post.tags || []).map(
                                                    (tag) => (
                                                        <code key={tag}>
                                                            #{tag}
                                                        </code>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </Link>
                        ))}
                    </div>
                ))}
        </Container>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts().map((post) => ({
        ...post,
        date: new Date(post.date),
    }));

    posts.sort((a, b) => b.date - a.date);

    const postsByYear = posts.reduce((acc, post) => {
        const year = post.date.getFullYear();

        if (!acc[year]) {
            acc[year] = [];
        }

        acc[year].push({
            ...post,
            date: post.date.toISOString(),
        });

        return acc;
    }, {});

    return {
        props: {
            postsByYear,
        },
    };
}
