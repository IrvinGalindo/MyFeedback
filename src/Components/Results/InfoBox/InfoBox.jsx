import React from "react";
import "./InfoBox.css";
import { Box } from "@mui/material";

const InfoBox = ({ title, detail }) => {
  return (
    <Box className="details">
      <Box className="details-info">
        <span>{title}</span>
        <p>{detail}</p>
      </Box>
    </Box>
  );
};

export default InfoBox;
