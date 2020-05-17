import React from 'react';
import Last5Confirm from './Last5Confirm';

const LastFiveDays = ({data}) => {

    const date = [];
    const confirm = [];
    const recover = [];
    const deaths = [];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === "Confirmed") {
        confirm.push(data[i].br);
        date.push(data[i].date);
      }
  
      if (data[i].status === "Recovered") {
        recover.push(data[i].br);
      }
  
      if (data[i].status === "Deceased") {
        deaths.push(data[i].br);
      }
      
    }

    const lastFiveDate = date.slice(Math.max(date.length - 5, 0));
    const lastFiveConfirm = confirm.slice(Math.max(confirm.length - 5, 0));
    const lastFiveRecover = recover.slice(Math.max(recover.length - 5, 0));
    const lastFiveDeaths = deaths.slice(Math.max(deaths.length - 5, 0));
   
    
    return ( 
        <div>
            <Last5Confirm 
                recover={lastFiveRecover}
                confirm={lastFiveConfirm} 
                deaths={lastFiveDeaths}
                date={lastFiveDate} 
            />
        </div>
     );
}
 
export default LastFiveDays;