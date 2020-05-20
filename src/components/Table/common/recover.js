import React from "react";

const Recover = ({ data }) => {
  return (
    <div>
     <span className="mr-2 text-success">
        {data.delta.recovered ? (
          <span
            className="fa fa-arrow-up"
            style={{ fontSize: "12px", fontWeight: "600" }}
          >{` ${data.delta.recovered}`}</span>
        ) : (
          ""
        )}
      </span>
      <span>{data.recovered ? data.recovered : '-'}</span>
    </div>
  );
};

export default Recover;
