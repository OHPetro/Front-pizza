import React, { useEffect } from "react";
import PizzaBlock from "../components/PizzaBlock";

import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import PizzaBlockLoading from "../components/PizzaBlockLoading";

const Home = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector((state) => state.pizza.isLoaded);
  const items = useSelector((state) => state.pizza.items);

  const getPizzas = async () => {
    dispatch(fetchPizzas());
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="home">
      <h2 className="home__label">Всі піци</h2>
      <div className="home__pizzas">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                id={obj.id}
                imageUrl={obj.imageUrl}
                price={obj.price}
                title={obj.title}
                types={obj.types}
                key={`${obj.id}_${obj.title}`}
              />
            ))
          : [...new Array(8)].map((_, index) => <PizzaBlockLoading key={index} />)}
      </div>
    </div>
  );
};

export default Home;
