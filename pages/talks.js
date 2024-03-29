import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';

const TITLE = 'Kévin Maschtaler | Software Engineering';
const DESCRIPTION =
    "Kévin Maschtaler's personal website and blog. Kévin is a software engineer specialized in engineering operations for high-growth startups.";
const URL = process.env.NEXT_PUBLIC_URL;
const IMAGE = URL + '/presentation.png';

function Talks() {
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
            <h1>Talks</h1>
            <div>
                <Card
                    title="Error Budgets - An SRE Principle"
                    href="/talks/errors-budget-sre.html"
                    image={
                        <Image
                            src="/talks/errors-budget-sre.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    }
                >
                    <code>May 2018</code>
                    <br />
                    <br />
                    Quick presentation of the SRE{"'"}s error budget to the{' '}
                    <Link href="https://caen.camp/">CaenCamp meetup</Link>.
                    <br />
                    The video is{' '}
                    <Link href="https://www.youtube.com/watch?v=GxOgHgXzISc">
                        available on Youtube
                    </Link>{' '}
                    (french)
                </Card>
                <Card
                    title="Blockchain presented to developers"
                    href="/talks/blockchain.html"
                    image={
                        <Image
                            src="/talks/blockchain.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    }
                >
                    <code>April 2016</code>
                    <br />
                    <br />
                    After an exploration about Bitcoin{"'"}s blockchain, we
                    wrote{' '}
                    <Link href="https://marmelab.com/blog/2016/04/28/blockchain-for-web-developers-the-theory.html">
                        a post about it on blog of marmelab
                    </Link>{' '}
                    detailing how a blockchain is working.
                    <br />
                    The conclusion of this series is to not use blockchain to
                    write your own applications due to the lack of benefit and
                    the <strong>awful impact on the climate</strong>.
                    <br />
                    <br />I still gave a talk to the AperoWeb Nancy meetup about
                    it.
                </Card>
                <Card
                    title="Introduction to Oauth2"
                    href="/talks/oauth2.html"
                    image={
                        <Image
                            src="/talks/oauth2.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    }
                >
                    <code>January 2015</code>
                    <br />
                    <br />
                    Deep dive into Oauth2 workflows (in french)
                </Card>
            </div>
        </Container>
    );
}

export default Talks;
