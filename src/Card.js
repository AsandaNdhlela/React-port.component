import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div>
      {item.map((Val) => {
        return (
          <div className="card m-4 4fr col col-sm-2" key={Val.id > 6}>
            <div className="card-img">
              <img src={Val.img} alt="" className="card-img-top" />
              <h2 className="card-img-overlay card-title">{Val.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
