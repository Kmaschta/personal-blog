import styles from './Container.module.css';

function Container({ children, text, noPadding }) {
    const className = [
        text ? styles.textContainer : styles.container,
        noPadding && styles.noPadding,
    ]
        .filter((x) => x)
        .join(' ');

    return <div className={className}>{children}</div>;
}

export default Container;
