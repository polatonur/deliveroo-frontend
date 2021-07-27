const Card = ({ elem }) => {
  return (
    <div>
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
