import Head from 'next/head';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import '../components/globals.css';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Kévin Maschtaler | Software Engineering</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Kévin Maschtaler's personal website and blog. Kévin is a software engineer specialized in engineering operations for high-growth startups."
                />
            </Head>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;
