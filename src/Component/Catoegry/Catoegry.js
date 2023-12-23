import React from "react";
import "./Catoegry.css";
export default function Catoegry({ filterbyCatoegry, allCatoegry }) {
  //to filter by Catoegry
  const onFilter = (cat) => {
    filterbyCatoegry(cat);
  };
  return (
    <div className="container">
      {allCatoegry.map((cat) => {
        return (
          <div className="Catoegry">
            <button onClick={() => onFilter(cat)}>{cat}</button>
          </div>
        );
      })}
    </div>
  );
}
