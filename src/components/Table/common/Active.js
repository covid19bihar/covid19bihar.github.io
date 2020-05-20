import React from "react";

const Recover = ({ data }) => {
  return (
    <div>
     <span className="mr-2 text-primary">
      &nbsp;
       {/*
        {data.delta.active ? (
          <span
            className="fa fa-arrow-up"
            style={{ fontSize: "12px", fontWeight: "600" }}
          >{` ${data.delta.active}`}</span>
        ) : (
          ""
        )}
        */}
      </span>
      <span>{data.active ? data.active : '-'}</span>
    </div>
  );
};

export default Recover;
