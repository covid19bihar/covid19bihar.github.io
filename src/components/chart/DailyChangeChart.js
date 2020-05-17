import React from "react";
import { Line } from "react-chartjs-2";
import style from './DailyChangeChart.module.css';

const dailyChangeChart = ({ data }) => {
 
  const date = [];
  const confirm = [];
  const recover = [];
  const deaths = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "Confirmed") {
      confirm.push(data[i].br);
      date.push(data[i].date);
    }

    if (data[i].status === "Recovered") {
      recover.push(data[i].br);
    }

    if (data[i].status === "Deceased") {
      deaths.push(data[i].br);
    }
    
  }

  const state = {
    labels: date,
    datasets: [
      {
        label: "Confirmed",
        fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#ff073a',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ff073a',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ff073a',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
        data: confirm,
      },

      {
        label: "Recovered",
        fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#28a745',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#28a745',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#28a745',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
        data: recover,
      },

      {
      label: "Deaths",
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#6c757d',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#6c757d',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#6c757d',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
        data: deaths,
      },
    ],
  };

  return (
    <div className={style.chartContainer}>
   
      <Line
        data={state}
        
        height={400}
        options={{
          title: {
            display: true,
            text: "Daily Cases",
            fontSize: 20,
          },
          maintainAspectRatio: false ,
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </div>
  );
};

export default dailyChangeChart;
