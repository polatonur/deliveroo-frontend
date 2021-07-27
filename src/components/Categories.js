import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

const Categories = ({
  category,
  allMeals,
  orderList,
  setOrderList,
  setTotalPrice,
  totalPrice,
}) => {
  return (
    <div className="category container">
      <h1>{category.name}</h1>

      <div className="menu">
        <section className="arrow arrow-r">
          <FontAwesomeIcon icon="arrow-right" />
        </section>

        <section className="arrow arrow-l">
          <FontAwesomeIcon icon="arrow-left" />
        </section>
        {category.meals.map((elem) => {
          return (
            <Card
              key={elem.id}
              elem={elem}
              allMeals={allMeals}
              orderList={orderList}
              setOrderList={setOrderList}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
