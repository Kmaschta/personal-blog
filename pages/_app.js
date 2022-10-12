import Head from 'next/head';
import Container from '../components/Container/Container';
import '../components/globals.css';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Kévin Maschtaler | Personal blog</title>
            </Head>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
