import Image from 'next/image';

import styles from './Experience.module.css';

export function Experience({ position, date, company, children }) {
    return (
        <article className={styles.experience}>
            <h2>{position}</h2> <h3>{company}</h3>
            <div className={styles.experienceDate}>{date}</div>
            {children}
        </article>
    );
}

function Company({ name, companyLogo, children }) {
    return (
        <div className={styles.company}>
            <div className={styles.pane}>
                <div className={styles.logo}>
                    <Image
                        src={companyLogo}
                        alt=""
                        width={42}
                        height={42}
                        objectFit="contain"
                    />
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Company;
