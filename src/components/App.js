import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    // let inter;
    if (bar != 100) {
      let inter = setTimeout(() => {
        setBar((pre) => pre + 10);
      }, 1000);
      return () => setInterval(inter);
    }
    // return () => setInterval(inter);
  }, [bar]);

  let outerBar = {
    width: "50vh",
    height: "20px",
    backgroundColor: "gray",
  };

  let innerBar = {
    width: `${bar}%`,
    height: "100%",
    backgroundColor: "blue",
  };
  return (
    <div>
      <h1>Progress Bar</h1>
      <div id="barOuter" style={outerBar}>
        <div id="barInner" style={innerBar}></div>
      </div>
      <p>{bar}%</p>
    </div>
  );
};

export default App;
