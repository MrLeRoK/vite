import {Button} from "../Button/Button.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";
import style from './ThemeButton.module.css'


export const ThemeButton = () => {
    const { value: themeValue, toggleTheme} = useContext(ThemeContext);
    return (
        <div className={style.button}>
            <Button
                text={themeValue === 'light' ? 'dark' : 'Light'}
                onClick={toggleTheme}
            />
        </div>
    )
}
