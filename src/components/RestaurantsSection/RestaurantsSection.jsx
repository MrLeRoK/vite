import { useState } from "react";
import { restaurants } from "../../../materials/mock.js";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList.jsx";
import styles from './RestaurantsSection.module.css';

export const RestaurantsSection = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find((item) => item.id === activeRestaurantId);

    return (
        <div className={styles.container}>
            <ul className={styles.restaurantList}>
                {restaurants.map(({ id, name }) => (
                    <li key={id} className={styles.restaurantItem}>
                        <button
                            className={styles.button}
                            disabled={id === activeRestaurantId}
                            onClick={() => setActiveRestaurantId(id)}
                        >
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
            {activeRestaurant && <RestaurantsList restaurant={activeRestaurant} />}
        </div>
    );
};
