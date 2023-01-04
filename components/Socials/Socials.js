import Link from 'next/link';
import classnames from 'classnames';

import GitHub from '../icons/GitHub';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';
import Keybase from '../icons/Keybase';
import RSS from '../icons/RSS';

import styles from './Socials.module.css';

function Socials({ small }) {
    return (
        <div className={classnames(styles.socials, { [styles.small]: small })}>
            <Link href="https://www.linkedin.com/in/kmaschta/">
                <a>
                    <LinkedIn />
                </a>
            </Link>
            <Link href="https://github.com/Kmaschta">
                <a>
                    <GitHub />
                </a>
            </Link>
            <Link href="https://twitter.com/Kmaschta">
                <a>
                    <Twitter />
                </a>
            </Link>
            <Link href="https://keybase.io/kmaschta">
                <a>
                    <Keybase />
                </a>
            </Link>
            {/*<Link href="https://keybase.io/kmaschta">
                <a>
                    <RSS />
                </a>
            </Link>*/}
        </div>
    );
}

Socials.defaultProps = {
    small: false,
};

export default Socials;
