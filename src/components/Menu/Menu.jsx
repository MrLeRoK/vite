import {CounterMenu} from "../CounterMenu/CounterMenu.jsx";

export const Menu = ({text}) => {
    return (
        <div>
            {text}
            <CounterMenu/>
        </div>
    )
}
