import React, { useEffect, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import CandleChart from './candleChart';

function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
      const priceData = [
        { time: '2018-10-19', open: 54.62, high: 55.50, low: 54.52, close: 54.90 },
        { time: '2018-10-22', open: 55.08, high: 55.27, low: 54.61, close: 54.98 },
        { time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21 },
        { time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42 },
        { time: '2018-10-25', open: 57.46, high: 57.63, low: 56.17, close: 56.43 },
        { time: '2018-10-26', open: 56.26, high: 56.62, low: 55.19, close: 55.51 },
        { time: '2018-10-29', open: 55.81, high: 57.15, low: 55.72, close: 56.48 },
        { time: '2018-10-30', open: 56.92, high: 58.80, low: 56.92, close: 58.18 },
        { time: '2018-10-31', open: 58.32, high: 58.32, low: 56.76, close: 57.09 },
        { time: '2018-11-01', open: 56.98, high: 57.28, low: 55.55, close: 56.05 },
      ];
      setData(priceData);
    }, []);

    function updateData() {
      const priceData = [
        { time: '2018-10-19', open: 554.62, high: 55.50, low: 54.52, close: 54.90 },
        { time: '2018-10-22', open: 555.08, high: 55.27, low: 54.61, close: 54.98 },
        { time: '2018-10-23', open: 546.09, high: 57.47, low: 56.09, close: 57.21 },
        { time: '2018-10-24', open: 517.00, high: 58.44, low: 56.41, close: 57.42 },
        { time: '2018-10-25', open: 427.46, high: 57.63, low: 56.17, close: 56.43 },
        { time: '2018-10-26', open: 616.26, high: 56.62, low: 55.19, close: 55.51 },
        { time: '2018-10-29', open: 525.81, high: 57.15, low: 55.72, close: 56.48 },
        { time: '2018-10-30', open: 516.92, high: 58.80, low: 56.92, close: 58.18 },
        { time: '2018-10-31', open: 828.32, high: 58.32, low: 56.76, close: 57.09 },
        { time: '2018-11-01', open: 736.98, high: 57.28, low: 55.55, close: 56.05 },
      ];
      setData(priceData);
    }
  return (
  
    <div className="App" style={{height: '500px', flex: 1}}>

      <div onClick={() => updateData()}>Change Data</div>
      {data[1] &&  <CandleChart
                        priceData={data}
                      />}
                     
    </div>
  );
}

export default App;
