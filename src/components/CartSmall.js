import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CartSmall = ({ orderList, totalPrice, setTotalPrice, setOrderList }) => {
  const [display, setDisplay] = useState(false);
  const increment = (id) => {
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].id === id) {
        const newOrderList = [...orderList];
        newOrderList[i].totalOrder++;
        setTotalPrice(totalPrice + Number(newOrderList[i].price));
        setOrderList(newOrderList);
        // setTotalPrice(totalPrice + Number(orderList[i].price));
      }
    }
  };
  const decrement = (id) => {
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].id === id) {
        const newOrderList = [...orderList];
        newOrderList[i].totalOrder--;
        setTotalPrice(totalPrice - Number(newOrderList[i].price));
        if (newOrderList[i].totalOrder === 0) {
          newOrderList.splice(i, 1);
        }
        setOrderList(newOrderList);
        // setTotalPrice(totalPrice + Number(orderList[i].price));
      }
    }
  };

  console.log(totalPrice);
  console.log(orderList);
  return (
    <div>
      <div className="cart-small" style={{ display: !display && "none" }}>
        <div className="icon-c">
          {" "}
          <FontAwesomeIcon
            onClick={() => {
              setDisplay(false);
            }}
            className="icon-close"
            icon="times"
          />
        </div>
        {/* <button
        style={{
          backgroundColor: orderList.length > 0 && "#07cdbd",
          color: orderList.length > 0 > 0 && "white",
        }}
      >
        Valider votre panier
      </button>
      <div
        className="empty-cart"
        style={{ display: orderList.length > 0 && "none" }}
      >
        <span>Votre panier est vide</span>
      </div> */}
        <div
          className={`${orderList.length > 0 ? "display" : ""} hidden`}
          // style={{ display: orderList.length > 0 && "block" }}
        >
          <div className="order-list">
            {orderList.map((order, index) => {
              return (
                order.totalOrder > 0 && (
                  <div key={index} className="order">
                    <span>
                      {" "}
                      <span
                        className="increment"
                        onClick={() => increment(order.id)}
                      >
                        <span> +</span>
                      </span>
                      <span className="order-number">{order.totalOrder}</span>
                      <span
                        className="decrement"
                        onClick={() => decrement(order.id)}
                      >
                        <span>-</span>
                      </span>
                      <span className="order-title">{order.title}</span>
                    </span>
                    <span>{(order.price * order.totalOrder).toFixed(2)}</span>
                  </div>
                )
              );
            })}
          </div>
          <div className="delivery-fee">
            <div className="line-1">
              <span>Sous-Total</span>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="line-2">
              <span>Frais de livraison</span>
              <span>2.50</span>
            </div>
          </div>
          <div className="total-price">
            <span>Total</span>
            <span>{Number(totalPrice + 2.5).toFixed(2)}</span>
          </div>
          <button className="btn-validate">Valider votre panier</button>
        </div>
        <div className="cart-icon-area">
          <FontAwesomeIcon className="cart-icon" icon="shopping-cart" />
        </div>
      </div>
      <div
        style={
          ({
            color: orderList.length > 0 && "#07cdbd",
          },
          { display: display && "none" })
        }
        className="cart-icon-area"
      >
        <FontAwesomeIcon
          onClick={() => {
            setDisplay(true);
          }}
          className="cart-icon"
          icon="shopping-cart"
        />
      </div>
    </div>
  );
};
export default CartSmall;
