import {Layout} from "./Layout/Layout.jsx";
import {RestaurantsSection} from "./components/RestaurantsSection/RestaurantsSection.jsx";
import './App.css'
import {createContext, useCallback, useState} from "react";
import {ThemeContextProvider} from "./components/theme-context/index.js";

export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === "light" ? "dark" : "light"))
    }, [])

  return (
      <ThemeContextProvider value={{value: theme, toggleTheme}}>
          <div className="container">
              <Layout>
                  <RestaurantsSection/>
              </Layout>
          </div>
      </ThemeContextProvider>
  )
}

export default App
