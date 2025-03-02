import {restaurants} from "../materials/mock.js";

function App() {
    console.log(restaurants)
  return (
      <>
          <div>
              {restaurants[0].name}
              <h3>Menu:</h3>
              <ul>
                  <li>
                      {restaurants[0].menu[0].name}
                  </li>
                  <li>
                      {restaurants[0].menu[1].name}
                  </li>
                  <li>
                      {restaurants[0].menu[2].name}
                  </li>
              </ul>
              <h3>Reviews:</h3>
              <ul>
                  <li>
                      {restaurants[0].reviews[0].text}
                  </li>
                  <li>
                      {restaurants[0].reviews[1].text}
                  </li>
              </ul>
          </div>
          <div>
              {restaurants[1].name}
              <h3>Menu:</h3>
              <ul>
                  <li>
                      {restaurants[0].menu[0].name}
                  </li>
                  <li>
                      {restaurants[0].menu[1].name}
                  </li>
                  <li>
                      {restaurants[0].menu[2].name}
                  </li>
              </ul>
              <h3>Reviews:</h3>
              <ul>
                  <li>
                      {restaurants[0].reviews[0].text}
                  </li>
                  <li>
                      {restaurants[0].reviews[1].text}
                  </li>
              </ul>
          </div>
          <div>
              {restaurants[2].name}
              <h3>Menu:</h3>
              <ul>
                  <li>
                      {restaurants[0].menu[0].name}
                  </li>
                  <li>
                      {restaurants[0].menu[1].name}
                  </li>
                  <li>
                      {restaurants[0].menu[2].name}
                  </li>
              </ul>
              <h3>Reviews:</h3>
              <ul>
                  <li>
                      {restaurants[0].reviews[0].text}
                  </li>
                  <li>
                      {restaurants[0].reviews[1].text}
                  </li>
              </ul>
          </div>
          <div>
              {restaurants[3].name}
              <h3>Menu:</h3>
              <ul>
                  <li>
                      {restaurants[0].menu[0].name}
                  </li>
                  <li>
                      {restaurants[0].menu[1].name}
                  </li>
                  <li>
                      {restaurants[0].menu[2].name}
                  </li>
              </ul>
              <h3>Reviews:</h3>
              <ul>
                  <li>
                      {restaurants[0].reviews[0].text}
                  </li>
                  <li>
                      {restaurants[0].reviews[1].text}
                  </li>
              </ul>
          </div>
      </>
  )
}

export default App
