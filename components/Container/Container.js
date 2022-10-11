import styles from './Container.module.css';

function Container({ children, text }) {
    return (
        <div className={text ? styles.textContainer : styles.container}>
            {children}
        </div>
    );
}

export default Container;
