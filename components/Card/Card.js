import Link from 'next/link';
import styles from './Card.module.css';

function CardLink({ href, children }) {
    if (href) {
        return (
            <Link href={href}>
                <a className={styles.cardLink}>{children}</a>
            </Link>
        );
    }

    return children;
}

function Card({ href, className, children, image, title, tags }) {
    return (
        <CardLink href={href}>
            <article className={styles.card + ' ' + className}>
                {image && <div className={styles.cardImage}>{image}</div>}
                <div className={styles.cardContent}>
                    {title && <h3>{title}</h3>}
                    <p>{children}</p>
                    {tags && (
                        <div>
                            {(tags || []).map((tag) => (
                                <code key={tag}>#{tag}</code>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </CardLink>
    );
}

Card.defaultProps = {
    className: '',
};

export default Card;
