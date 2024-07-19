import {Layout} from "./Layout/Layout.jsx";
import {RestaurantsSection} from "./components/RestaurantsSection/RestaurantsSection.jsx";

function App() {
  return (
      <>
          <div>
              <Layout>
                  <RestaurantsSection/>
              </Layout>
          </div>
      </>
  )
}

export default App
