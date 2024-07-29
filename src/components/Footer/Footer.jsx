import style from './Footer.module.css';
import { Button } from "../Button/Button.jsx";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <footer>contact</footer>
            <Button viewVariant='primary' text='+78800-22-11-22'/>
        </div>
    );
};
