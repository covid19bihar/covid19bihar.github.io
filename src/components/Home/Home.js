import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../HeaderFooter/Header";
import Counter from "../Counter/Counter";
import TableData from "../Table/TableData";
import Chart from "../chart/chart";
import WordCloud from "../wordCloud/wordCloud";
import PreLoder from "../utils/PreLoder";
import Footer from "../HeaderFooter/Footer";

const Home = () => {
  const [data, setData] = useState({
    confirm: 0,
    active: 0,
    deaths: 0,
    recovered: 0,
    deltaConfirm: 0,
    deltaDeaths: 0,
    deltaRecovered: 0,
    lastupdatetime: "",
    loading: false,
  });

  // State Level confirmed | Active | Recovered ...
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios("https://api.covid19india.org/data.json");
      const biharData = data.data.statewise.filter((d) => d.state === "Bihar");
      const bihar = biharData[0];

      setData({
        confirm: bihar.confirmed,
        active: bihar.active,
        deaths: bihar.deaths,
        recovered: bihar.recovered,
        deltaConfirm: bihar.deltaconfirmed,
        deltaRecovered: bihar.deltarecovered,
        deltaDeaths: bihar.deltadeaths,
        lastupdatetime: bihar.lastupdatedtime,
        loading: true,
      });
    };
    fetchData();
  }, []);

  const [distData, setDistData] = useState({
    dData: [],
    loading: false,
    word: [],
  });

  // Bihar District Data
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(
        "https://api.covid19india.org/v2/state_district_wise.json"
      );

      const biharData = data.data.filter((d) => d.state === "Bihar");

      const dist = biharData[0].districtData;

      const word = [];
      for (let i = 0; i < dist.length; i++) {
        word.push({ text: dist[i].district, value: dist[i].confirmed });
      }

      setDistData({ dData: biharData[0].districtData, loading: true, word });
    };
    fetchData();
  }, []);

  // Daily Data
  const [dailyData, setDailyData] = useState({ daily: {}, loading: false });

  useEffect(() => {
    const fetchData = async () => {
      const daily = await axios(
        "https://api.covid19india.org/states_daily.json"
      );
      setDailyData({ daily: daily.data.states_daily, loading: true });
      //console.log(daily.data.states_daily[7]);
    };
    fetchData();
  }, []);

  const [zone, setZone] = useState({ zone: [], loading: false });
  useEffect(() => {
    const fetchData = async () => {
      const zone = await axios("https://api.covid19india.org/zones.json");
      const filterZone = zone.data.zones.filter(
        (zone) => zone.statecode === "BR"
      );
      setZone({ zone: filterZone, loading: true });
    };
    fetchData();
  }, []);

  return distData.loading && dailyData.loading && data.loading ? (
    <React.Fragment>
      <Header data={data.lastupdatetime} />
      <Counter data={data} dailyData={dailyData.daily} />
      <TableData data={distData.dData} />
      <Chart data={dailyData.daily} />
      <WordCloud word={distData.word} zone={zone.zone} />
      <Footer />
    </React.Fragment>
  ) : (
    <PreLoder />
  );
};

export default Home;
