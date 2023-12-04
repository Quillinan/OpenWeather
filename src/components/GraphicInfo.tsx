import React from "react";
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

  const data = graphicInfo?.list.map((item) => {
    const date = new Date(item.dt * 1000);
    const day = String(date.getDate()).padStart(2, "0");

    if (far) {
      return {
        dia: day,
        temperatura: convertCtoF(item.main.temp),
      };
    }

    return {
      dia: day,
      temperatura: item.main.temp,
    };
  });

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
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
