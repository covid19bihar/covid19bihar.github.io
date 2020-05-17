import React from "react";
import ReactWordCloud from "react-wordcloud";

import style from "./wordCloud.module.css";
import cn from "classnames";

const WordCloud = ({ word }) => {
  return (
    <div className={cn("container", style.word)}>
      <div className="card my-5 mx-1">
        <div className="card-header">District Words: (Click on) &#128522;</div>
        <div className="card-body">
          <ReactWordCloud
            words={word}
            options={{
             colors: [
                "#007bff",
                "#6610f2",
                "#6f42c1",
                "#e83e8c",
                "#dc3545",
                "#fd7e14",
                "#ffc107",
                "#28a745",
                "#17a2b8",
                "#6c757d"
              ], 
              enableTooltip: true,
              deterministic: true,
              fontFamily: "impact",
              fontSizes: [15, 60],
              fontStyle: "normal",
              fontWeight: "normal",
              randomSeed: false,
              rotations: 2,
              rotationAngles: [0, 45, 90],
              scale: "sqrt",
              spiral: "archimedean",
              transitionDuration: 1000,
              
            }}

            callbacks={{
              getWordTooltip: ({ value, text }) => `Confirmed Cases: ${value}`  
            }}
              />
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
