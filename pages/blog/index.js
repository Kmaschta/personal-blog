import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function Blog({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.url}>
                    <Link href={post.url}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: { posts },
    };
}
