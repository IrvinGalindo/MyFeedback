import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import "./BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ question, labels, dataset }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataset,
      },
    ],
  };

  return (
    <Box className="chart">
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        color="text.secondary"
      >
        {question}
      </Typography>
      <Box className="chart-box">
        <Bar options={options} data={data} />
      </Box>
    </Box>
  );
};

export default BarChart;
