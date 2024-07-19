import {restaurants} from "../../../materials/mock.js";
import {useState} from "react";
import {RestaurantsList} from "../RestaurantsList/RestaurantsList.jsx";

export const RestaurantsSection = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find((item) => item.id === activeRestaurantId);
    // Можно везде использовать "name" вместа  "id"

    return (
        <div>
            <ul>
                {restaurants.map(({id, name}) => (
                    <li key={id}>
                        <button
                            disabled={id === activeRestaurantId}
                            onClick={() => setActiveRestaurantId(id)}
                        >
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
            {activeRestaurant && <RestaurantsList restaurant={activeRestaurant}/>}
        </div>
    );
};
