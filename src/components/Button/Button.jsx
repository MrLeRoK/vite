import styles from './Button.module.css'
import classnames from "classnames";
import {useTheme} from "../theme-context/index.jsx";

export const Button = ({text, onClick, children, viewVariant = 'default', ...props}) => {
    const { value: themeValue } = useTheme()

    return (
        <button
            className={classnames(styles.button, {
                [styles.default]: viewVariant === 'default',
                [styles.primary]: viewVariant === 'primary',
                [styles.small]: viewVariant === 'small',
                [styles.light]: themeValue === 'light',
                [styles.dark]: themeValue === 'dark',

            })}
            onClick={onClick}
            {...props}
        >
            {text || children}
        </button>
    );
};
