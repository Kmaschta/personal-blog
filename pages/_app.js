import Head from 'next/head';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import '../components/globals.css';
import Header from '../components/Header/Header';

const TITLE = 'Kévin Maschtaler | Software Engineering';
const DESCRIPTION =
    "Kévin Maschtaler's personal website and blog. Kévin is a software engineer specialized in engineering operations for high-growth startups.";
const URL = process.env.NEXT_PUBLIC_URL;
const IMAGE = URL + '/presentation.png';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{TITLE}</title>
                <link rel="icon" href="/favicon.ico" />
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
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;
