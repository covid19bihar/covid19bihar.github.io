import React from "react";

const Confirm = ({ data, delta }) => {
  return (
    <div>
      <span className="mr-2 text-danger">
        {data.delta.confirmed ? (
          <i
            className="fa fa-arrow-up"
            style={{ fontSize: '12px', fontWeight: "600" }}
          >{` ${data.delta.confirmed}`}</i>
        ) : (
          ""
        )}
      </span>
      <span className="">{data.confirmed ? data.confirmed : '-'}</span>
    </div>
  );
};

export default Confirm;
