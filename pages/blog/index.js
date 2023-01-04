import Image from 'next/image';

import { getAllPosts } from '../../lib/posts';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import Head from 'next/head';

const TITLE = 'Kévin Maschtaler | Software Engineering';
const DESCRIPTION =
    "Kévin Maschtaler's personal website and blog. Kévin is a software engineer specialized in engineering operations for high-growth startups.";
const URL = process.env.NEXT_PUBLIC_URL;
const IMAGE = URL + '/presentation.png';

export default function Blog({ postsByYear }) {
    return (
        <Container>
            <Head>
                <meta name="description" content={DESCRIPTION} />

                <meta property="og:title" content={TITLE} />
                <meta property="og:url" content={URL} />
                <meta property="og:image" content={IMAGE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:site_name" content={TITLE} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Kmaschta" />
                <meta name="twitter:site" content={URL} />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:image" content={IMAGE} />
            </Head>
            {Object.entries(postsByYear)
                .sort((a, b) => parseInt(b[0], 0) - parseInt(a[0], 0))
                .map(([year, posts]) => (
                    <div key={year}>
                        <h2>{year}</h2>
                        {posts.map((post) => (
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
                                        placeholder="blur"
                                        blurDataURL={post.blurImage}
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
                                    {(post.tags || []).length > 0
                                        ? ' | '
                                        : null}
                                    {(post.tags || []).map((tag) => (
                                        <code key={tag}>#{tag}</code>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                ))}
        </Container>
    );
}

export async function getStaticProps() {
    const posts = (await getAllPosts()).map((post) => ({
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
