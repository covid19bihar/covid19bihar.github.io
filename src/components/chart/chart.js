import React from "react";
import DailyChangeChart from "./DailyChangeChart";
import LastDay from "./LastDay";

const Chart = ({ data }) => {
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

  const lastDate = date.slice(Math.max(date.length - 10, 0));
  const lastConfirm = confirm.slice(Math.max(confirm.length - 10, 0));
  const lastRecover = recover.slice(Math.max(recover.length - 10, 0));
  const lastDeaths = deaths.slice(Math.max(deaths.length - 10, 0));

  return (
    <>
      <DailyChangeChart
        date={date}
        confirm={confirm}
        recover={recover}
        deaths={deaths}
      />
      <LastDay
        date={lastDate}
        confirm={lastConfirm}
        recover={lastRecover}
        deaths={lastDeaths}
      />
    </>
  );
};

export default Chart;
