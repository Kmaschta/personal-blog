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
