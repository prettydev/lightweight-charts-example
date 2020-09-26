import React, { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
export default function CandleChart({priceData, volumeData}) {
  const chartContainerRef = useRef();
  const chart = useRef();

  useEffect(() => {
  
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#27293d",
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "#27293d",
        },
        horzLines: {
          color: "#27293d",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
      },
    });
  
    const candleSeries = chart.current.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });

    candleSeries.setData(priceData);


    candleSeries.createPriceLine({
      price: 4.53,
      color: "#000",
      lineWidth: 1,
    });

    chart.current.timeScale().fitContent();

  }, [priceData]);

  

  return (
    <>
      <div ref={chartContainerRef} id="test-id" className="chart-container" style={{height: '100%'}} />
    </>
  );
}
