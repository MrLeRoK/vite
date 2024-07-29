import { Menu } from "../Menu/Menu.jsx";
import { Reviews } from "../Reviews/Reviews.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";
import styles from './RestaurantsList.module.css';

export const RestaurantsList = ({ restaurant }) => {

    if (!restaurant || restaurant.length === 0) {
        return <p>Данные не найдены</p>;
    }

    return (
        <div className={styles.container}>
            <div key={restaurant.id}>
                <h1 className={styles.heading}>{restaurant.name}</h1>
                <h3 className={styles.subheading}>Menu:</h3>
                <ul className={styles.noPoints}>
                    {restaurant.menu.map((item) => (
                        <li className={styles.menuItem} key={item.id}>
                            <Menu text={item.name} />
                        </li>
                    ))}
                </ul>
                <h3 className={styles.subheading}>Reviews:</h3>
                <ul className={styles.reviewList}>
                    {restaurant.reviews.map((review) => (
                        <li className={styles.menuItem} key={review.id}>
                            <Reviews text={review.text} />
                        </li>
                    ))}
                </ul>
                <ReviewForm />
            </div>
        </div>
    );
};
