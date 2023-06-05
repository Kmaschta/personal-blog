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
                <script
                    async
                    src="https://analytics.umami.is/script.js"
                    data-website-id="f29e5512-8329-4dd8-b9b4-43eb0d37d825"
                ></script>
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
