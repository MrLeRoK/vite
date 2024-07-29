import {Button} from "../Button/Button.jsx";
import {useTheme} from "../theme-context/index.jsx";
import style from './ThemeButton.module.css'


export const ThemeButton = () => {
    const { value: themeValue, toggleTheme} = useTheme();
    return (
        <div className={style.button}>
            <Button
                text={themeValue === 'light' ? 'dark' : 'Light'}
                onClick={toggleTheme}
            />
        </div>
    )
}
