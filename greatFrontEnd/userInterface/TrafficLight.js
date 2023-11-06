import { useState, useEffect } from "react";

// Color Interval map where the values are in ms
const colorIntervalMap = {
  red: 4000,
  yellow: 500,
  green: 3000,
};

export default function TrafficLight() {
  // light value can either be green| yellow | red
  const [light, setLight] = useState("green");

  useEffect(() => {
    const lightArr = Object.keys(colorIntervalMap);
    var currLightIndex = lightArr.indexOf(light);
    let nextLightIndex =
      (currLightIndex >= 0 ? currLightIndex : lightArr.length) - 1;
    const nextLight = lightArr[nextLightIndex];
    const colorInterval = setTimeout(() => {
      setLight(nextLight);
    }, colorIntervalMap[light]);
    return () => {
      clearTimeout(colorInterval);
    };
  }, [light]);
  return (
    <div>
      <div className="traffic-light">
        {Object.keys(colorIntervalMap).map((lightVal) => (
          <div className={`light ${light === lightVal ? lightVal : ""}`}></div>
        ))}
      </div>
    </div>
  );
}
