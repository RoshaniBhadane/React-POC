import React from "react";
import { Tooltip } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

const BarChartComp = ({ data }) => {

  return (
    <ResponsiveContainer>
      <BarChart
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
        <Bar dataKey="salary" fill="#8884d8" />
        <Bar dataKey="tax" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComp