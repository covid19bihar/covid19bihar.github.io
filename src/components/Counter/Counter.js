import React from "react";
import style from "./Counter.module.css";

const Counter = ({ data }) => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.counter}>
          <div className={style.confirm}>
            <h5 className={style.confirm_name}>Confirmed</h5>
            <h4 className={style.h4}>
              [ +{parseInt(data.deltaConfirm).toLocaleString("en-IN")} ]
            </h4>
            <h1 className={style.h1}>
              {parseInt(data.confirm).toLocaleString("en-IN")}
            </h1>
          </div>
        </div>

        <div className={style.counter}>
          <div className={style.active}>
            <h5 className={style.active_name}>Active</h5>
            <h4 className={style.h4}>&nbsp;</h4>
            <h1 className={style.h1}>
              {parseInt(data.active).toLocaleString("en-IN")}
            </h1>
          </div>
        </div>

        <div className={style.counter}>
          <div className={style.recover}>
            <h5 className={style.recover_name}>Recovered</h5>
            <h4 className={style.h4}>
              [ +{parseInt(data.deltaRecovered).toLocaleString("en-IN")} ]
            </h4>
            <h1 className={style.h1}>
              {parseInt(data.recovered).toLocaleString("en-IN")}
            </h1>
          </div>
        </div>

        <div className={style.counter}>
          <div className={style.deaths}>
            <h5 className={style.deaths_name}>Deaths</h5>
            <h4 className={style.h4}>
              [ +{parseInt(data.deltaDeaths).toLocaleString("en-IN")} ]
            </h4>
            <h1 className={style.h1}>
              {parseInt(data.deaths).toLocaleString("en-IN")}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
