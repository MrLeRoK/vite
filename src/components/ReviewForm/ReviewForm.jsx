import {useState} from "react";

export const ReviewForm = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setText('');
        setRating(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span>Имя:</span>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // required
                />
            </div>
            <div>
                <span>Текст:</span>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    // required
                />
            </div>
            <div>
                <span>Рейтинг:</span>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    // required
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Сохранить</button>
        </form>
    );
};
