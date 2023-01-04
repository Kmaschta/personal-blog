import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';

import Container from '../components/Container/Container';

import { getAllPosts } from '../lib/posts';
import styles from './Homepage.module.css';
import Socials from '../components/Socials/Socials';
import Company, { Experience } from '../components/Experience/Experience';
import Slider from '../components/Slider/Slider';

import ArteLogo from '../public/img/arte.png';
import ShotgunLogo from '../public/img/shotgun.png';
import CloudLogo from '../public/img/1859.png';
import CnrsLogo from '../public/img/cnrs.png';
import WallixLogo from '../public/img/wallix.png';

const ADJECTIVES = [
    'reliable',
    'efficient',
    'trustworthy',
    'safe',
    'responsive',
];

const SLIDES = [
    {
        name: 'ARTE',
        image: ArteLogo,
        content: (
            <>
                ARTE is a publicly-financed media by France and Germany.
                <br />
                We revamped the whole website to a more modern design still used
                today.
                <br />
                <br />
                Read more about the migration on this{' '}
                <a
                    href="https://marmelab.com/blog/2021/01/07/migration-continue-chez-arte-pourquoi.html"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    blog posts serie and talk
                </a>{' '}
                (in french)
            </>
        ),
    },
    {
        name: 'Shotgun',
        image: ShotgunLogo,
        content: (
            <>
                Shotgun is a startup offering whitelabel tickets platform for
                events and festival.
                <br />
                We rebuilt their whole event organizers back-office platform.
            </>
        ),
    },
    {
        name: '1859 Cloud',
        image: CloudLogo,
        content: (
            <>
                1859 Cloud is a startup that builds a virtual investment
                platform to share anonymous insights on investment ideas.
                <br />
                We built their entire technology from ground start.
            </>
        ),
    },
    {
        name: 'CNRS',
        image: CnrsLogo,
        content: (
            <>
                The CNRS is the French National Centre for Scientific Research.
                <br />
                <br />
                For them, we released a static web site generator to publish
                papers and data in digest, readable, and searchable way using
                web semantic and vizualization tools.
                <br />
                <br />
                The library,{' '}
                <a
                    href="https://github.com/Inist-CNRS/lodex"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Lodex
                </a>
                , is open source and available on GitHub.
            </>
        ),
    },
    {
        name: 'WALLIX',
        image: WallixLogo,
        content: (
            <>
                WALLIX is a leading cybersecurity company.
                <br />
                We built a simple application to manage hundreads of bastion
                instances and their complex configuration.
            </>
        ),
    },
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
                                setAdjective(j % 2 === 0 ? '|' : null);
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const particleJS = require('particles.js');
            particlesJS.load('particles-js', 'particles.json', function () {
                console.log('callback - particles.js config loaded');
            });
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.particles}>
                <Container>
                    <div id="particles-js"></div>
                </Container>
            </div>
            <section className={styles.section}>
                <div>
                    <Container text noPadding>
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
                        <Socials />
                    </Container>
                </div>
            </section>
            <section className={styles.section}>
                <div>
                    <Container text noPadding>
                        <p className={styles.preIntro}>Experiences</p>
                        <Company name="Tint" companyLogo="/img/tint.png">
                            <Experience
                                position="Staff Software Engineer, Platform & Reliability Lead"
                                date="Since 2022"
                                company="Tint"
                            >
                                <p>
                                    Lead the Engineering Operations teams I
                                    bootstraped.
                                    <br />
                                    Including Site Reliability Engineering and
                                    Platform Engineering (Design System &
                                    Developer Productivity).
                                    <br />
                                    Conducting the initiative to get Tint the
                                    SOC2 certification.
                                </p>
                            </Experience>
                            <Experience
                                position="Senior Software Engineer"
                                date="2 years - 2020 to 2022"
                                company="Tint"
                            >
                                <p>
                                    Engineer #2, helped implement the first
                                    features of the platform, from the first few
                                    pages to a full-featured protection program
                                    management platform that is able to support
                                    100k contracts a day.
                                    <br />
                                    <br />
                                    Bootstraped the SRE team and processes
                                    (system design, on-call rotation, incident
                                    management, disaster recovery, etc).
                                    <br />
                                    <br />
                                    Participated to the Y Combinator batch
                                    (W21), Seed round, and Series A.
                                </p>
                            </Experience>
                        </Company>
                        <Company
                            name="Marmelab"
                            companyLogo="/img/marmelab.png"
                        >
                            <Experience
                                position="Software Engineer"
                                date="5 years - 2015 to 2020"
                                company="Marmelab"
                            >
                                <>
                                    <p>
                                        Senior Software Engineer for a Web
                                        Agency.
                                        <br />
                                        Worked on various innovation projects,
                                        for startups to french medias.
                                    </p>
                                    <Slider slides={SLIDES} />
                                </>
                            </Experience>
                        </Company>
                    </Container>
                </div>
            </section>
            <section className={styles.section}>
                <div>
                    <Container noPadding>
                        <div className={styles.postHeading}>
                            <h3>Latest blog post</h3>
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
                                    placeholder="blur"
                                    blurDataURL={post.blurImage}
                                />
                            }
                        >
                            <>
                                <p>{post.excerpt}</p>
                                <>
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
                                </>
                            </>
                        </Card>
                    </Container>
                    <Container noPadding>
                        <div className={styles.postFooter}>
                            <Link href="/blog">
                                <a>More blog posts</a>
                            </Link>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const posts = (await getAllPosts()).map((post) => ({
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
