import styles from "./header.module.css";

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.logo}>Kenil Pansara</h1>
                <button className={styles.btn}>Login</button>
            </div>
        </>
    )
}

export default Header;