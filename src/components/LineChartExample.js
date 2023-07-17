// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJs } from "chart.js/auto";
// import { categories } from "../utils/utils";
// import { useSelector } from "react-redux";

// const data = {
//   labels: categories,
//   datasets: [
//     {
//       label: "Populor",
//       data: [34, 56, 23, 89, 55],
//       // backgroundColor: ["red", "green", "blue"],
//       borderColor: "yellow",
//       borderWidth: 1,
//     },
//   ],
// };

// export default function BarChart() {
//   const { tasks } = useSelector((state) => state.expenseReducer);



import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const LineChartExample = () => {

  const { tasks } = useSelector((state) => state.expenseReducer);

  const data = tasks;

  return (
    <LineChart width={window.innerWidth} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartExample;


