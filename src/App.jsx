import {restaurants} from "../materials/mock.js";
import {Restaurants} from "./components/Restaurants/Restaurants.jsx";
import {Layout} from "./Layout/Layout.jsx";
import {TabsSection} from "./components/TabsSection/TabsSection.jsx";
import {useState} from "react";


function App() {
    const [tab, setTab] = useState('rest1')

    const tabIndex = {
        'rest1': 0,
        'rest2': 1,
        'rest3': 2,
        'rest4': 3
    };

    const filteredRestaurant = restaurants[tabIndex[tab]] ? [restaurants[tabIndex[tab]]] : [];
    console.log(filteredRestaurant)
  return (
      <>
          <div>
              <Layout>
              <TabsSection active={tab} onChange={(current) => setTab(current)} />
                  <Restaurants restaurants={filteredRestaurant} />
              </Layout>
          </div>
      </>
  )
}

export default App
