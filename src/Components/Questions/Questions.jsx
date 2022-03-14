import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fade,
  LinearProgress,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Lottie from "react-lottie";
import StarLottie from "../../assets/animations/Star.json";
import { useLocation, useNavigate } from "react-router-dom";
import CustomSkeleton from "../CustomSkeleton/CustomSkeleton";
import "./Questions.css";
import InputType from "./InputType/InputType";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  questionsSelector,
  updateAnswers,
} from "../../Services/redux/reducers/questionsReducer";

const Questions = () => {
  const [questionFade, setQuestionFade] = useState(true);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState();
  const userIp = useLocation().state.userIp;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions } = useSelector(questionsSelector);
  //const [questions, setQuestions] = useState([]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!questionFade) setIndex((i) => i + 1);
      setQuestionFade(true);
    }, 1000);
  }, [questionFade, questions.length]);

  // const fetchQuestions = async () => {
  //   const docs = await getQuestions();
  //   setQuestions(docs);
  // };

  const backToPreviousQuestion = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextQuestion = (userAnswer) => {
    setQuestionFade(false);
    dispatch(updateAnswers(userAnswer, userIp, index));
    questions[index].type === "textField" && setText("");
    index === questions.length - 1 && navigate("/gratitude");
  };

  return questions?.length > 0 ? (
    <Box className="questions">
      <Fade in={true} timeout={1500}>
        <Card className="card">
          <CardContent sx={{ height: "100%" }}>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                Hey Friend!!
              </Typography>
              <Fade in={questionFade}>
                <Box className="questions__question">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="text.secondary"
                  >
                    {questions[index]?.question}
                  </Typography>
                  <InputType
                    type={questions[index].type}
                    nextQuestion={nextQuestion}
                    index={index}
                    setText={setText}
                    text={text}
                  />
                </Box>
              </Fade>
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

            <CardActions className="questions__progress">
              <Box sx={{ width: "100%", marginBottom: 1 }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {index > 0 && (
                    <ArrowBackRoundedIcon
                      sx={{ marginLeft: 2, cursor: "pointer" }}
                      onClick={() => backToPreviousQuestion()}
                    />
                  )}
                  {questions[index].type === "textField" && (
                    <ArrowForwardIcon
                      sx={{ marginLeft: 2, cursor: "pointer" }}
                      onClick={() => nextQuestion(text)}
                    />
                  )}
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(index * 100) / questions.length}
                  sx={{ marginTop: 2 }}
                />
              </Box>
            </CardActions>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  ) : (
    <CustomSkeleton />
  );
};

export default Questions;
