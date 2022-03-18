import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import "./GratitudeView.css";
import { useNavigate } from "react-router-dom";

const GratitudeView = () => {
  const navigate = useNavigate();
  return (
    <Box className="gratitude">
      <Fade in={true} timeout={1500}>
        <Card className="card">
          <CardContent sx={{ height: "100%" }}>
            <Box>
              <Box className="questions-question">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="text.secondary"
                >
                  Thanks for your help, I really appreciate your support
                </Typography>
                <Button sx={{ margin: 1 }} onClick={() => navigate("/results")}>
                  view feedbacks
                </Button>
              </Box>
            </Box>
          </CardContent>
          <CardActions className="questions-progress">
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
