import React, { useEffect, useState } from "react";
import "./App.css";
import CandleChart from "./candleChart";
import { initialData, newData } from "./data";

function App() {
  const [data, setData] = useState([]);

  const resetData = () => {
    setData(initialData);
  };

  const updateData = () => {
    setData(newData);
  };

  useEffect(() => {
    resetData();
  }, []);

  return (
    <div className="App" style={{ height: "500px", flex: 1 }}>
      <div>
        <button onClick={() => updateData()}>Update Data</button>
        <button onClick={() => resetData()}>Reset Data</button>
      </div>
      {data[1] && <CandleChart priceData={data} />}
    </div>
  );
}

export default App;
