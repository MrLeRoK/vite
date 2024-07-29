import style from './Footer.module.css'
import {Button} from "../Button/Button.jsx";
import {ThemeContext} from "../../App.jsx";
export const Footer = () => {
    return (
        <div>
            <ThemeContext.Provider value={{value: 'dark'}}>
            <footer className={style.footer}>contact</footer>
            <Button style={{marginLeft: '20px'}} viewVariant='primary' text='Hello'/>
            </ThemeContext.Provider>
        </div>
    )
}
