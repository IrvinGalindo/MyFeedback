import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fade,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import InputType from "../InputType/InputType";
import { TEXT_FIELD } from "../../../types/questions";
import axios from "axios";

const UserInfo = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [ip, setIP] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  return (
    <Box className="questions">
      <Fade in={true} timeout={1500}>
        <Card className="card">
          <CardContent sx={{ height: "100%" }}>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                Hey Friend!!
              </Typography>
              <Box className="questions-question">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="text.secondary"
                >
                  What is your name?
                </Typography>
                <InputType
                  type={TEXT_FIELD}
                  index={-1}
                  setText={setUserName}
                  text={userName}
                />
              </Box>
            </Box>
            <CardActions className="questions-progress">
              <Box sx={{ width: "100%", marginBottom: 1 }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingTop: 2,
                  }}
                >
                  {userName && (
                    <ArrowForwardIcon
                      color="info"
                      sx={{ margin: 2, cursor: "pointer" }}
                      onClick={() =>
                        navigate("/Questions", {
                          state: { userIp: ip, userName: userName },
                        })
                      }
                    />
                  )}
                </Box>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default UserInfo;
