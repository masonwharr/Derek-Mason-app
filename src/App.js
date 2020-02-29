import React from "react";
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";

function Launderer() {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };

   return (
      <div className="App">
         <Masonspart onClick={increment} count={count} />
         <Derekspart count={count} />
      </div>
   );
}

export default Launderer;
