import Container from '../components/Container/Container';

function Legal() {
    return (
        <Container text>
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
