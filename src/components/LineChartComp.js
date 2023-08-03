import React from "react";
import { Tooltip } from "@mui/material";
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

const LineChartComp = ({ data }) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="salary" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="tax" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>

  );
}

export default LineChartComp