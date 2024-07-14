import {CounterMenu} from "../CounterMenu/CounterMenu.jsx";
import './Restaurants.css'


export const RestaurantsList = ({restaurants}) => {
    if (!restaurants || restaurants.length === 0) {
        return <p>Данные не найдены</p>;
    }

  return (
      <div>
          {restaurants.map((restaurant) => (
              <div
                  key={restaurant.id}>
                  <h1>{restaurant.name}</h1>
                  <h3>Menu:</h3>
                  <ul className='no_points'>
                      {restaurant.menu.map((item) => (
                          <li className='menu'
                              key={item.id}>
                              {item.name}
                              <CounterMenu/>
                          </li>
                      ))}
                  </ul>
                  <h3>Reviews:</h3>
                  <ul style={{listStyleType:'none'}}>
                      {restaurant.reviews.map((review) => (
                          <li
                              key={review.id}>
                              {review.text}
                          </li>
                      ))}
                  </ul>
              </div>
          ))}
      </div>
  )
}
