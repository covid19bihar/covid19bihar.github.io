import React from "react";
import { formatDate, formatDateAbsolute } from "../utils/commonFunction";

const Header = ({ data }) => {
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: "10px",
          textAlign: "center",
          fontWeight: 700,
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
      </div>
    </React.Fragment>
  );
};

export default Header;
