import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fade,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import "./GratitudeView.css";

const GratitudeView = () => {
  return (
    <Box className="gratitude">
      <Fade in={true} timeout={1500}>
        <Card className="card">
          <CardContent sx={{ height: "100%" }}>
            <Box>
              <Box className="questions__question">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="text.secondary"
                >
                  Thanks for your help, I really appreciate your support
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions className="questions__progress">
            <Box sx={{ width: "100%", marginBottom: 1 }}>
              <LinearProgress variant="determinate" value={100} />
            </Box>
          </CardActions>
        </Card>
      </Fade>
    </Box>
  );
};

export default GratitudeView;
