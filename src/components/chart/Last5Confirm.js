import React from "react";
import { Bar } from "react-chartjs-2";


const Last5Confirm = ({ confirm, recover, deaths, date }) => {
  const state = {
    labels: date,
    datasets: [
      {
        label: "Confirmed",
        backgroundColor: "rgb(255, 7, 58, 0.7)",

        data: confirm,
      },
      {
        label: "Recovered",
        backgroundColor: "rgb(40, 167, 69, 0.7)",

        data: recover,
      },
      {
        label: "Deaths",
        backgroundColor: "#6c757d",

        data: deaths,
      },
    ],
  };

  return (
    <div className="myContainer mt-4">
      <Bar
        data={state}
        height={300}
        options={{
          title: {
            display: true,
            text: "Trend Last 5 Days",
            fontSize: 20,
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          legend: {
            display: true,
            position: "top",
          },
          responsive: true,

          scales: {
            yAxes: [
              {
                stacked: true,
                display: true,
                gridLines: {
                  display: true,
                }
              },
            ],
            xAxes: [
              {
                stacked: true,
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Last5Confirm;
