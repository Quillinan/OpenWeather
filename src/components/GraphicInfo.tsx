import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useCityInfo } from "../context/CityInfoContext";
import { convertCtoF, useFahrenheit } from "../context/FahrenheitContext";

interface GraphicInfoProps {}

const GraphicInfo: React.FC<GraphicInfoProps> = () => {
  const { graphicInfo } = useCityInfo();
  const { far } = useFahrenheit();
  const [fontSizeTooltip, setFontSizeTooltip] = useState(["1vw", "1.1vw"]);
  const [fontSizeAxis, setFontSizeAxis] = useState("1vw");

  const [alignChart, setAlignChart] = useState("start");

  const data = graphicInfo?.list.map((item) => {
    const date = new Date(item.dt * 1000);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dayOfWeek = new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
    })
      .format(date)
      .slice(0, -1);

    const formattedDate = `${day}/${month} (${dayOfWeek})`;

    const temperatureValue = far ? convertCtoF(item.main.temp) : item.main.temp;

    return {
      day: formattedDate,
      temperatura: temperatureValue,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        setFontSizeTooltip(["3vw", "3.3vw"]);
        setFontSizeAxis("4vw");
        setAlignChart("center");
      } else {
        setFontSizeTooltip(["1vw", "1.1vw"]);
        setFontSizeAxis("1vw");
        setAlignChart("start");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "90%",
        height: "50%",
        backgroundColor: "#fff",
        border: "0.1rem solid #e1e0e0",
        alignSelf: alignChart,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 40, right: 50, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fontSize: fontSizeAxis }} />
          <YAxis
            unit={far ? "°F" : "°C"}
            tick={{ fontSize: fontSizeAxis, fontFamily: "Poppins" }}
          />
          <Tooltip
            labelFormatter={(value) => `${value}`}
            formatter={(value) => [`${value} °${far ? "F" : "C"}`]}
            contentStyle={{
              fontSize: fontSizeTooltip[1],
              fontFamily: "Poppins",
              width: "max-content",
              height: "10vh",
              backgroundColor: "#efefef",
              border: "none",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
            }}
            labelStyle={{ fontSize: fontSizeTooltip[0], color: "black" }}
          />

          <Legend />
          <Line
            type="monotone"
            dataKey="temperatura"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicInfo;
