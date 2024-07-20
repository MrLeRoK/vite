import {Layout} from "./Layout/Layout.jsx";
import {RestaurantsSection} from "./components/RestaurantsSection/RestaurantsSection.jsx";
import './App.css'

function App() {
  return (
      <>
          <div className="container">
              <Layout>
                  <RestaurantsSection/>
              </Layout>
          </div>
      </>
  )
}

export default App
