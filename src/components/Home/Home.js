import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../HeaderFooter/Header";
import Counter from "../Banner/Counter";
import TableData from "../Table/TableData";
import DailyChangeChart from "../chart/DailyChangeChart";
import WordCloud from "../wordCloud/wordCloud";
import LastFiveDays from '../chart/LastFiveDays';
import About from './About';

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

  const [distData, setDistData] = useState({
    dData: [],
    loading: false,
    word: [],
  });

  const [dailyData, setDailyData] = useState({ daily: {}, loading: false });


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

  // Daily Data
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

 
  return distData.loading ? (
    <React.Fragment>
    
      <Header data={data.lastupdatetime} />
      <Counter data={data} dailyData={dailyData.daily} />
      <TableData data={distData.dData} />
      <DailyChangeChart data={dailyData.daily} />
      <LastFiveDays data={dailyData.daily}/>
      <WordCloud word={distData.word} />
      <About />
    </React.Fragment>
  ):
  ''
};

export default Home;
