import {restaurants} from "../materials/mock.js";
import {Layout} from "./Layout/Layout.jsx";
import {TabsSection} from "./components/TabsSection/TabsSection.jsx";
import {useState} from "react";
import {RestaurantsList} from "./components/RestaurantsList/RestaurantsList.jsx";


function App() {
    const [tab, setTab] = useState('rest1')

    const tabIndex = {
        'rest1': 0,
        'rest2': 1,
        'rest3': 2,
        'rest4': 3
    };

    const foundRestaurant = restaurants.find((restaurant, index) => index === tabIndex[tab]);
    const filteredRestaurant = foundRestaurant ? [foundRestaurant] : [];

    // const filteredRestaurant = restaurants[tabIndex[tab]] ? [restaurants[tabIndex[tab]]] : [];

  return (
      <>
          <div>
              <Layout>
              <TabsSection active={tab} onChange={(current) => setTab(current)} />
                  <RestaurantsList  restaurants={filteredRestaurant} />
              </Layout>
          </div>
      </>
  )
}

export default App
