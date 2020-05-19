import React from "react";
import ReactWordCloud from "react-wordcloud";
import cn from "classnames";

const WordCloud = ({ word, zone }) => {
  const zoneColor = (district) => {
    for (let i = 0; i < zone.length; i++) {
      if (zone[i].district === district) return zone[i].zone;
    }
  };

  return (
    <div className={cn("myContainer")}>
      <div className="card my-5 mx-1">
        <div className="card-header">Colorwise Zone</div>
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
              rotations: 2,
              rotationAngles: [-90, 0],
              scale: "sqrt",
              spiral: "archimedean",
              transitionDuration: 1000,
            }}
            callbacks={{
              getWordTooltip: ({ value }) => `Confirmed Cases: ${value}`,
              getWordColor: ({ text: district }) => zoneColor(district),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
