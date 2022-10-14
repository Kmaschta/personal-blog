import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavLink.module.css';

function NavLink({ children, href, ...rest }) {
    const router = useRouter();
    const active = router.pathname === href;

    return (
        <li
            className={[styles.navLink, active ? styles.activeNavLink : null]
                .filter((x) => x)
                .join(' ')}
        >
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        </li>
    );
}

export default NavLink;
