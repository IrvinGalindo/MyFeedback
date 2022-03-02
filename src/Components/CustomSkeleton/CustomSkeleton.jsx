import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import React from "react";

import "./CustomSkeleton.css";

const CustomSkeleton = () => {
  return (
    <Box className="box">
      <Stack className="card customSkeleton" spacing={1}>
        <Skeleton variant="text" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={90} />
        <Skeleton variant="rectangular" width={"50%"} height={50} />
        <Skeleton variant="circular" width={200} height={200} />
      </Stack>
    </Box>
  );
};

export default CustomSkeleton;
