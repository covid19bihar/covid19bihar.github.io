import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons'



const Confirm = ({ data }) => {
  return (
    <div>
      <span className="mr-2 text-danger">
        {data.delta.confirmed ? (
          <span style={{ fontWeight: 880, fontSize: 12 }}>
          <FontAwesomeIcon icon={faArrowUp } /> {` ${data.delta.confirmed}`}
          </span>
        
        ) : (
          ""
        )}
      </span>
      <span className="">{data.confirmed ? data.confirmed : '-'}</span>
    </div>
  );
};

export default Confirm;
