import React from "react";
import "./Cards.css";
import { Zoom } from "react-awesome-reveal";

export default function Cards({ item }) {
  return (
    <div className="container">
      <Zoom>
        {item.map((item) => {
          return (
            <div key={item.id} className="Card">
              <img src={item.img} alt="" />
              <div className="card-body">
                <h4 className="Head">{item.title}</h4>
                <p>{item.description}</p>
                <p className="pound">{item.price}</p>
              </div>
            </div>
          );
        })}
      </Zoom>
    </div>
  );
}
