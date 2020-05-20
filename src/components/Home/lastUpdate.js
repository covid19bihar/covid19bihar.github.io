import React from "react";
import CountUp from "react-countup";
import { formatDate, formatDateAbsolute } from "../utils/commonFunction";

const Header = ({ data, totalTest }) => {
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: "10px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        <div className="text-warning" style={{ fontSize: "14px" }}>
          <span>
            Last Update:{" "}
            {isNaN(Date.parse(formatDate(data)))
              ? ""
              : formatDateAbsolute(data)}
          </span>
        </div>

        <div style={{ color: "#6a66c1" }}>
          <span>Total Tested: </span>
          <CountUp
            start={0}
            end={parseInt(totalTest)}
            duration={3}
            delay={0.7}
            separator={","}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
