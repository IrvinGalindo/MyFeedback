import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./ResultsView.css";
import {
  questionsSelector,
  fetchQuestions,
} from "../../../Services/redux/reducers/questionsReducer";
import { useSelector, useDispatch } from "react-redux";
import BarChart from "../../BarChart/BarChart";
import { TEXT_FIELD } from "../../../types/questions";
import Lottie from "react-lottie";
import ScrollDown from "../../../assets/animations/scroll-down.json";
import InfoBox from "../InfoBox/InfoBox";
import { prettyPrintStat, prettyPrintAverage } from "../../../util/util";
import ChatReview from "../../ChatReview/ChatReview";

const ResultsView = () => {
  const { questions } = useSelector(questionsSelector);
  const dispatch = useDispatch();
  const [ratingAverage, setRatingAverage] = useState(0);
  const ratings = { totalStars: 0, totalReviews: [] };

  const getAverage = useCallback(() => {
    const average =
      ratings.totalStars > 0
        ? ratings.totalReviews.reduce((acc, curr) => acc + curr)
        : 0;
    return prettyPrintAverage(average / ratings.totalStars);
  }, [ratings]);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(fetchQuestions());
    }
  }, [questions, dispatch]);

  useEffect(() => {
    setRatingAverage(getAverage());
  }, [ratings, getAverage]);

  const getDataset = (answers) => {
    const dataset = [0, 0, 0, 0, 0];
    answers.map(
      (i) => (dataset[i.answer - 1] = (dataset[i.answer - 1] || 0) + 1)
    );

    ratings.totalReviews = ratings.totalReviews.concat(
      dataset.reduce((acc, curr, index) => {
        ratings.totalStars = ratings.totalStars + curr;
        return curr * (index + 1) + acc;
      }),
      0
    );
    return dataset;
  };

  return (
    <Box className="results">
      <Card className="results-card">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginBottom: 3 }}
        >
          Here, you can see all the feedback results shown in amazing charts.
        </Typography>
        <CardContent>
          <Box className="result-details">
            <InfoBox
              title="Reviews"
              detail={prettyPrintStat(questions[0]?.answers.length)}
            />
            <InfoBox title="Average Rating" detail={ratingAverage} />
          </Box>
          {questions.map((question, index) =>
            question.type === TEXT_FIELD ? (
              <ChatReview key={index} question={question} />
            ) : (
              <BarChart
                key={index}
                question={question.question}
                labels={["1", "2", "3", "4", "5"]}
                dataset={getDataset(question.answers)}
              />
            )
          )}
        </CardContent>
      </Card>
      <Box className="results-scroll">
        <Lottie
          options={{
            loop: 3,
            autoplay: true,
            animationData: ScrollDown,
          }}
          height={150}
          width={150}
        />
      </Box>
    </Box>
  );
};

export default ResultsView;
