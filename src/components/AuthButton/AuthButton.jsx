import {Button} from "../Button/Button.jsx";
import { useUser } from "../user-context/index.jsx";
import styles from './AuthButton.module.css';

export const AuthButton = () => {
    const { user, toggleUser } = useUser();

    return (
        <div className={styles.authButton}>
            {user ? (
                <>
                    <span>{user.name}</span>
                    <Button text="Выйти" onClick={toggleUser} />
                </>
            ) : (
                <Button text="Войти" onClick={toggleUser} />
            )}
        </div>
    );
};
