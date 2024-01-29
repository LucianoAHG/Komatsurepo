import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((item) => item.mes),
        datasets: [
          {
            label: 'Ventas MM',
            data: data.map((item) => item.iva),
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: data.map((item) => item.mes)
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
