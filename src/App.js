import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Catoegry from "./Component/Catoegry/Catoegry";
import Cards from "./Component/Cards/Cards";
import { item } from "./Component/Data/Data";
import { useState } from "react";

function App() {
  const [itemData, setitemData] = useState(item);
  //get all catoegry unique
  const allCatoegry = ["الكل", ...new Set(item.map((i) => i.catoegry))];
  //filter by catoegry
  const filterbyCatoegry = (cat) => {
    if (cat === "الكل") {
      setitemData(item);
    } else {
      const newArray = item.filter((item) => {
        return item.catoegry === cat;
      });
      setitemData(newArray);
    }
  };
  //filter by catoegry
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArray = item.filter((item) => {
        return item.title === word;
      });
      setitemData(newArray);
    }
  };
  return (
    <div className="App">
      <Navbar filterbySearch={filterbySearch} />
      <Header />
      <Catoegry filterbyCatoegry={filterbyCatoegry} allCatoegry={allCatoegry} />
      <Cards item={itemData} />
    </div>
  );
}

export default App;
