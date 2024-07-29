import { useEffect, useReducer, useRef } from 'react';
import styles from './ReviewForm.module.css';
import {Button} from "../Button/Button.jsx";

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 1,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case 'setName':
            return {
                ...state,
                name: payload,
            };
        case 'setText':
            return {
                ...state,
                text: payload,
            };
        case 'setRating':
            return {
                ...state,
                rating: payload,
            };
        case 'reset':
            return INITIAL_FORM;
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus(); // Фокус на первый input при монтировании компонента
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'reset' }); // Сброс формы
    };

    return (
        <form onSubmit={handleSubmit} className={styles.reviewForm}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Имя:</label>
                <input
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                        dispatch({ type: 'setName', payload: e.target.value });
                    }}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="text" className={styles.label}>Текст:</label>
                <textarea
                    id="text"
                    value={form.text}
                    onChange={(e) => {
                        dispatch({ type: 'setText', payload: e.target.value });
                    }}
                    className={styles.textarea}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="rating" className={styles.label}>Рейтинг:</label>
                <select
                    id="rating"
                    value={form.rating}
                    onChange={(e) => {
                        dispatch({ type: 'setRating', payload: Number(e.target.value) });
                    }}
                    className={styles.select}
                    required
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <Button viewVariant='primary' text='Сохранить'/>
        </form>
    );
};
