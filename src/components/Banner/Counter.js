import React from "react";
import CountUp from 'react-countup';
import style from "./Counter.module.css";

const Counter = ({ data }) => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.counter}>
          <div className={style.confirm}>
            <h5 className={style.confirm_name}>Confirmed</h5>
            <h4 className={style.h4}>[ +<CountUp start={0} end={data.deltaConfirm} duration={3} delay={1} separator={","} /> ]</h4>
            <h1 className={style.h1}>
              <CountUp start={0} end={data.confirm} duration={2} delay={1} separator={","} />
            </h1>
          </div>
        </div>

        <div className={style.counter}>
          <div className={style.active}>
            <h5 className={style.active_name}>Active</h5>
            <h4 className={style.h4}>&nbsp;</h4>
            <h1 className={style.h1}>
            <CountUp start={0} end={data.active} duration={2} delay={1} separator={","} />
            </h1>
          </div>
        </div>

        <div className={style.counter}>
          <div className={style.recover}>
            <h5 className={style.recover_name}>Recovered</h5>
            <h4 className={style.h4}>[ +<CountUp start={0} end={data.deltaRecovered} duration={3} delay={1.5} separator={","} /> ]</h4>
            <h1 className={style.h1}>
            <CountUp start={0} end={data.recovered} duration={2} delay={0.8} separator={","} />
              </h1>
          </div>
        </div>

        <div className={style.counter}>
          <div className={style.deaths}>
            <h5 className={style.deaths_name}>Deaths</h5>
            <h4 className={style.h4}>[ +<CountUp start={0} end={data.deltaDeaths} duration={3} delay={1.5} separator={","} /> ]</h4>
            <h1 className={style.h1}>
            <CountUp start={0} end={data.deaths} duration={2} delay={1.5} separator={","} />
              </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
