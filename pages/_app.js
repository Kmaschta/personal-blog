import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import '../components/globals.css';
import Header from '../components/Header/Header';

const TITLE = 'Kévin Maschtaler | Software Engineering';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{TITLE}</title>
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
