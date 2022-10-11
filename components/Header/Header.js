import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container/Container';
import styles from './Header.module.css';

function Header() {
    return (
        <Container>
            <header className={styles.header}>
                <div>
                    <Link href="/">
                        <a>
                            <Image
                                className={styles.logo}
                                src="/img/logo.png"
                                alt="Logo"
                                width={60}
                                height={60}
                                priority
                            />
                        </a>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/talks">
                                <a>Talks</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Container>
    );
}

export default Header;
