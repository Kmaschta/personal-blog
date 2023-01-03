import Link from 'next/link';
import Container from '../Container/Container';
import Socials from '../Socials/Socials';
import styles from './Footer.module.css';

function Footer() {
    return (
        <Container>
            <footer className={styles.footer}>
                <div className={styles.identity}>
                    <div>Kévin Maschtaler</div>
                    <Socials small />
                </div>
                <div>
                    <Link href="/legal">
                        <a>Legal Notices</a>
                    </Link>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;
