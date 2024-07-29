import styles from './Header.module.css'
import {ThemeButton} from "../ThemeButton/ThemeButton.jsx";
export const Header = () => {
    return (
        <>
        <h1 className={styles.header}>
            <header>List of restaurants</header>
        </h1>
            <ThemeButton/>
        </>
    )
}
