import Card from "./Card";

const Categories = ({ category }) => {
  return (
    <div className="category container">
      <h1>{category.name}</h1>
      <div className="menu">
        {category.meals.map((elem) => {
          return <Card elem={elem} />;
        })}
      </div>
    </div>
  );
};
export default Categories;
