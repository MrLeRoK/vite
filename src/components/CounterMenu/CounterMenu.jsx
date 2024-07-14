import {useState} from "react";

export const CounterMenu = () => {
    const [value, setCounter] = useState(0);

    return (
        <div>
            <button disabled={value >= 5} onClick={() => setCounter(value + 1)}>+</button>
            {value}
            <button disabled={value <= 0} onClick={() => setCounter(value - 1)}>-</button>
        </div>
    )
}
