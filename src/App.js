import "./App.css";
import Categories from "./components/Categories";
import axios from "axios";
import logo from "./assets/img/logo.svg";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "./components/Cart";
import CartSmall from "./components/CartSmall";
library.add(faArrowLeft, faArrowRight, faShoppingCart, faTimes);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-onur.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>
      <p>En cous de chargement ...</p>
    </div>
  ) : (
    <div className="app">
      <header>
        <nav className="container">
          <img src={logo} alt="deliveroo" />
        </nav>
      </header>
      <section className="sub-header container">
        <div className="col-1">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <div className="col-2">
          <img src={data.restaurant.picture} alt="restaurant" />
        </div>
      </section>
      <section className="main-container">
        <main>
          {data.categories.map((elem, index) => {
            return (
              elem.meals.length !== 0 && (
                <Categories
                  key={index}
                  category={elem}
                  allMeals={data.categories}
                  orderList={orderList}
                  setOrderList={setOrderList}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              )
            );
          })}
        </main>

        <Cart
          orderList={orderList}
          setOrderList={setOrderList}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <CartSmall
          orderList={orderList}
          setOrderList={setOrderList}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      </section>
      <footer>
        <div>
          {" "}
          <p>
            Made with <span>React</span> at{" "}
            <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
            <a href="https://github.com/polatonur">Onur</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

// <Categories category={elem[index]} />
