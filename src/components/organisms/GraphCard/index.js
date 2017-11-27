import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import Card from "../../molecules/Card";

const SimpleLineChart = ({ data }) => {
  return (
    <ResponsiveContainer aspect={1.6}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ left: -25, right: 10, top: 5, bottom: 25 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="sales"
          stroke="#BE2C2C"
          strokeWidth="3px"
          dot={{ strokeWidth: 2, r: 4 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="linear"
          dataKey="avg"
          stroke="#e89b9b"
          strokeWidth="3px"
          dot={{ strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const GraphCard = ({ heading, data }) => {
  return (
    <Card heading={heading} isLoading={!data.length > 0}>
      <SimpleLineChart data={data} />
    </Card>
  );
};

export default GraphCard;
