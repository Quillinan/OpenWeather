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
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dayOfWeek = new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
    }).format(date);

    const formattedDate = `${day}/${month}(${dayOfWeek})`;

    const temperatureValue = far ? convertCtoF(item.main.temp) : item.main.temp;

    return {
      day: formattedDate,
      temperature: temperatureValue,
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
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            labelFormatter={(value) => `Data: ${value}`}
            formatter={(value) => [
              `${value} °${far ? "F" : "C"}`,
              "Temperatura",
            ]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicInfo;
