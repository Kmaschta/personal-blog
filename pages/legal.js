import Head from 'next/head';
import Container from '../components/Container/Container';

const TITLE = 'Kévin Maschtaler | Software Engineering';
const DESCRIPTION =
    "Kévin Maschtaler's personal website and blog. Kévin is a software engineer specialized in engineering operations for high-growth startups.";
const URL = process.env.NEXT_PUBLIC_URL;
const IMAGE = URL + '/presentation.png';

function Legal() {
    return (
        <Container text>
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
            <h1>Legal Notices</h1>
            <h2>Editor</h2>
            <dl>
                <dt>Publishing director</dt>
                <dd>Kévin Maschtaler</dd>
            </dl>
            <dl>
                <dt>Contact</dt>
                <dd>kevin@kmaschta.me</dd>
            </dl>
            <h2>Hosting</h2>
            <dl>
                <dt>Company</dt>
                <dd>Netlify, Inc.</dd>
            </dl>
            <dl>
                <dt>Office</dt>
                <dd>
                    2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA).
                </dd>
            </dl>
            <dl>
                <dt>Contact</dt>
                <dd>privacy@netlify.com</dd>
            </dl>
        </Container>
    );
}

export default Legal;
