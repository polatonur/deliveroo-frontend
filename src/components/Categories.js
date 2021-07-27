import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

const Categories = ({ category }) => {
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
          return <Card elem={elem} />;
        })}
      </div>
    </div>
  );
};
export default Categories;
