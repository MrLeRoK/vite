import {Layout} from "./Layout/Layout.jsx";
import {RestaurantsSection} from "./components/RestaurantsSection/RestaurantsSection.jsx";
import './App.css'
import {ThemeContextProvider} from "./components/theme-context/index.jsx";
import {UserContextProvider} from "./components/user-context/index.jsx";
import { AuthButton } from "./components/AuthButton/AuthButton.jsx";
function App() {

  return (
      <ThemeContextProvider>
          <UserContextProvider>
              <div className="container">
                  <Layout>
                      <AuthButton />
                      <RestaurantsSection />
                  </Layout>
              </div>
          </UserContextProvider>
      </ThemeContextProvider>
  )
}

export default App
