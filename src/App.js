import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import CandleChart from "./candleChart";
import { initialData, newData } from "./data";

function App() {
  const [data, setData] = useState([]);

  function initData() {
    setData(initialData);
  }

  function updateData() {
    setData(newData);
  }

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="App" style={{ height: "500px", flex: 1 }}>
      <div>
        <button onClick={() => updateData()}>Change Data</button>
        <button onClick={() => initData()}>init Data</button>
      </div>
      {data[1] && <CandleChart priceData={data} />}
    </div>
  );
}

export default App;
