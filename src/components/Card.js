const Card = ({
  elem,
  allMeals,
  orderList,
  setOrderList,
  totalPrice,
  setTotalPrice,
}) => {
  // find clicked meal
  const handlerMealClick = (id) => {
    let isExist = false;
    for (let k = 0; k < orderList.length; k++) {
      if (orderList[k].id === id) {
        isExist = true;
        const newOrderList = [...orderList];
        newOrderList[k].totalOrder++;
        setTotalPrice(totalPrice + Number(newOrderList[k].price));
        setOrderList(newOrderList);
      }
    }
    if (!isExist) {
      for (let i = 0; i < allMeals.length; i++) {
        for (let j = 0; j < allMeals[i].meals.length; j++) {
          if (allMeals[i].meals[j].id === id) {
            setTotalPrice(totalPrice + Number(allMeals[i].meals[j].price));
            const newOrderList = [...orderList];
            newOrderList.push({
              title: allMeals[i].meals[j].title,
              price: allMeals[i].meals[j].price,
              id: id,
              totalOrder: 1,
            });
            setOrderList(newOrderList);

            break;
          }
        }
      }
    }

    console.log(orderList);
  };
  return (
    <div classNam="meal" onClick={() => handlerMealClick(elem.id)}>
      <div className="col-1" style={{ width: !elem.picture && "100%" }}>
        <h2>{elem.title}</h2>
        <p>{elem.description.substring(0, 70)}</p>
        <div className="bottom">
          <span className="price">{elem.price} €</span>
          {elem.popular && (
            <span className="popular">
              {" "}
              <span className="star">★</span>
              Populaire
            </span>
          )}
        </div>
      </div>
      {elem.picture && (
        <div className="col-2">
          <img src={elem.picture} alt="meal" />
        </div>
      )}
    </div>
  );
};

export default Card;
