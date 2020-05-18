import React from "react";
import ReactWordCloud from "react-wordcloud";

import style from "./wordCloud.module.css";
import cn from "classnames";

const WordCloud = ({ word }) => {
  return (
    <div className={cn("container", style.word)}>
      <div className="card my-5 mx-1">
        <div className="card-header">Word Cloud</div>
        <div className="card-body">
          <ReactWordCloud
            words={word}
            options={{
            
              enableTooltip: true,
              deterministic: true,
              fontFamily: "impact",
              fontSizes: [15, 60],
              fontStyle: "normal",
              fontWeight: "bold",
              randomSeed: null,
              rotations: 3,
              rotationAngles: [0, -90],
              scale: "sqrt",
              spiral: "archimedean",
              transitionDuration: 1000,

            }}

            callbacks={{
              getWordTooltip: ({ value }) => `Confirmed Cases: ${value}`  
            }}
              />
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
