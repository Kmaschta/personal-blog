import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container/Container';
import styles from './Header.module.css';
import NavLink from './NavLink';

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
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                        <NavLink href="/talks">Talks</NavLink>
                    </ul>
                </nav>
            </header>
        </Container>
    );
}

export default Header;
