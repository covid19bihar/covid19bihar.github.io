import React, { useState, useEffect } from "react";
import axios from "axios";
import LastUpdate from "./lastUpdate";
import Counter from "../Counter/Counter";
import TableData from "../Table/TableData";
import Chart from "../chart/chart";
import WordCloud from "../wordCloud/wordCloud";
import PreLoder from "../utils/PreLoder";
import Footer from "./Footer";
import SomeInformation from "./SomeInformation";
import India from './india';

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

    indConfirmed: 0,
    indActive: 0,
    indRecovered: 0,
    indDeaths: 0,
    indDeltaConfirmed: 0,
    indDeltaRecovered: 0,
    indDeltaDeaths: 0,

    indTested: 0,
    indLastUpdate: '',
    loading: false,
  });

  // State Level confirmed | Active | Recovered ...
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios("https://api.covid19india.org/data.json");
      const biharData = data.data.statewise.filter((d) => d.state === "Bihar");
      const bihar = biharData[0];

      
      const indConfirmed = data.data.statewise.reduce((a, b) => +a +  +b.confirmed, 0)
      const indActive = data.data.statewise.reduce((a, b) => +a + +b.active, 0)
      const indRecovered = data.data.statewise.reduce((a, b) => +a + +b.recovered, 0)
      const indDeaths = data.data.statewise.reduce((a, b) => +a + +b.deaths, 0)

      const indDeltaConfirmed = data.data.statewise.reduce((a, b) => +a + +b.deltaconfirmed, 0);
      const indDeltaRecovered = data.data.statewise.reduce((a, b) => +a + +b.deltarecovered, 0)
      const indDeltaDeaths = data.data.statewise.reduce((a, b) => +a + +b.deltadeaths, 0)

      const tested = data.data.tested.slice(Math.max(data.data.tested.length - 1, 0))
      const indTested = tested[0].totalsamplestested;
      const indLastUpdate = tested[0].updatetimestamp;

  

      setData({
        confirm: bihar.confirmed,
        active: bihar.active,
        deaths: bihar.deaths,
        recovered: bihar.recovered,
        deltaConfirm: bihar.deltaconfirmed,
        deltaRecovered: bihar.deltarecovered,
        deltaDeaths: bihar.deltadeaths,
        lastupdatetime: bihar.lastupdatedtime,
        indConfirmed,
        indActive,
        indRecovered,
        indDeaths,
        indDeltaConfirmed,
        indDeltaRecovered,
        indDeltaDeaths,
        indTested,
        indLastUpdate,
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

  // Zone
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

  const [tested, setTested] = useState({ test: 0, loading: false });

  useEffect(() => {
    const fetchData = async () => {
      const test = await axios(
        "https://api.covid19india.org/state_test_data.json"
      );
      const filterTest = test.data.states_tested_data.filter(
        (t) => t.state === "Bihar"
      );
      const biharTest = filterTest.slice(Math.max(filterTest.length - 1, 0));
      const lastTested = biharTest[0].totaltested;

      setTested({ test: lastTested, loading: true });
    };
    fetchData();
  }, []);

  return distData.loading &&
    dailyData.loading &&
    data.loading &&
    tested.loading ? (
    <React.Fragment>
      <LastUpdate data={data.lastupdatetime} totalTest={tested.test} />
      <Counter data={data} dailyData={dailyData.daily} />
      <TableData data={distData.dData} />
      <Chart data={dailyData.daily} />
      <WordCloud word={distData.word} zone={zone.zone} />
      <SomeInformation data={data} totalTest={tested.test} />
      <Footer />
    <India data={data} />
    </React.Fragment>
  ) : (
    <PreLoder />
  );
};

export default Home;
