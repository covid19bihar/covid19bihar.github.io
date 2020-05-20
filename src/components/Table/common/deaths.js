import React from "react";

const Deaths = ({ data }) => {
  return (
    <div>
      <span className="mr-2 text-secondary">
        {data.delta.deceased ? (
          <span
            className="fa fa-arrow-up"
            style={{ fontSize: "12px", fontWeight: "600" }}
          >{` ${data.delta.deceased}`}</span>
        ) : (
          ""
        )}
      </span>
      <span>{data.deceased ? data.deceased : '-'}</span>
    </div>
  );
};

export default Deaths;
