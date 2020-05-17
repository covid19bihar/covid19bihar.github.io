import React from "react";
import { formatDate, formatDateAbsolute } from "../utils/commonFunction";

const Header = ({ data }) => {
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        {/* 

        <h1
          className="text-info mb-0"
          style={{ fontSize: "60px", fontFamily: "'Teko', sans-serif" }}
        >
          Covid19Bihar
        </h1>
        */}

        <div className="text-warning" style={{ fontSize: "14px" }}>
          <span className="m-0">Last Update: </span>
          <span className="">
            {isNaN(Date.parse(formatDate(data)))
              ? ""
              : formatDateAbsolute(data)}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
