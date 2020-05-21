import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons'



const Confirm = ({ data }) => {
  return (
    <div>
      <span className="mr-2 text-secondary">
        {data.delta.deceased ? (
          <span style={{ fontWeight: 880, fontSize: 12 }}>
          <FontAwesomeIcon icon={faArrowUp } /> {` ${data.delta.deceased}`}
          </span>
        
        ) : (
          ""
        )}
      </span>
      <span className="">{data.deceased ? data.deceased : '-'}</span>
    </div>
  );
};

export default Confirm;
