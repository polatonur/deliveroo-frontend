import "./App.css";
import Categories from "./components/Categories";
import axios from "axios";
import logo from "./assets/img/logo.svg";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft, faArrowRight);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

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

      <main>
        <div className="cart">
          <button disabled>Valider votre panier</button>
          <div>
            <span>Votre panier est vide</span>
          </div>
        </div>
        {data.categories.map((elem, index) => {
          return elem.meals.length !== 0 && <Categories category={elem} />;
        })}
      </main>
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
