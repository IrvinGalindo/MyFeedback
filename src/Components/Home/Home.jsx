import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import StarLottie from "../../assets/animations/Star.json";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [ip, setIP] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  return (
    <Box className="box">
      <Card className="card">
        <CardContent sx={{ height: "100%" }}>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Hey Friend!!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              This is Irvin. I have noticed that time goes very quickly when you
              do what you love. In this short time, I have met amazing people
              like you and I would like to tell you that thanks to you, I have
              been able to learn new skills and develop the ones I already had.
              Can you give me your feedback about my performance?
            </Typography>
          </Box>
          <Box className="card__image">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: StarLottie,
              }}
              height={250}
              width={250}
            />
          </Box>
          <CardActions>
            <IconButton
              aria-label="Next button"
              onClick={() => navigate("/questions", { state: { userIp: ip } })}
            >
              <ArrowForwardIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
