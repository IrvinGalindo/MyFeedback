import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResultsView = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = ["1", "2", "3", "4", "5"];
  const dataset = [{}];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => 5),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => 10),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box>
      <Card>
        <Typography gutterBottom variant="h5" component="div">
          Here, you can see all the feedback results shown in amazing charts.
        </Typography>
        <CardContent sx={{ height: "100%" }}>
          <Bar options={options} data={data} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResultsView;
