import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons'



const Confirm = ({ data }) => {
  return (
    <div>
      <span className="mr-2 text-success">
        {data.delta.recovered ? (
          <span style={{ fontWeight: 880, fontSize: 12 }}>
          <FontAwesomeIcon icon={faArrowUp } /> {` ${data.delta.recovered}`}
          </span>
        
        ) : (
          ""
        )}
      </span>
      <span className="">{data.recovered ? data.recovered : '-'}</span>
    </div>
  );
};

export default Confirm;
