import Image from 'next/image';

import styles from './Experience.module.css';

function Experience({ company, companyLogo, position, date, children }) {
    return (
        <article className={styles.experience}>
            <div className={styles.header}>
                <div className={styles.company}>
                    <Image
                        src={companyLogo}
                        alt=""
                        width={60}
                        height={60}
                        objectFit="contain"
                    />
                </div>
                <div>
                    <h2>{position}</h2> @ <h3>{company}</h3>
                    <div>{date}</div>
                </div>
            </div>
            <div>{children}</div>
        </article>
    );
}

export default Experience;
