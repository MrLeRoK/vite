import {useState} from "react";
import {useUser} from "../user-context/index.jsx";

export const CounterMenu = () => {
    const [value, setCounter] = useState(0);
    const { user } = useUser();

    return (
        <div>
            {user && (
                <>
                    <button disabled={value >= 5} onClick={() => setCounter(value + 1)}>+</button>
                    {value}
                    <button disabled={value <= 0} onClick={() => setCounter(value - 1)}>-</button>
                </>
            )}

            {!user && <span>{value}</span>}
        </div>
    )
}
