import { createSlice } from "@reduxjs/toolkit";
import { getQuestions, updateQuestion } from "../../firebase/calls";

const initialState = {
  questions: [],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    updateAnswer: (state, action) => {
      const { userName, userIp, userAnswer, index } = action.payload;
      const answers = state.questions[index].answers;
      const answerIndex = answers.findIndex(
        (answer) => answer.userIp === userIp && answer.respondent === userName
      );
      if (answerIndex === -1) {
        answers.push({
          respondent: userName,
          userIp: userIp,
          answer: userAnswer,
        });
      } else {
        answers[answerIndex] = {
          ...answers[answerIndex],
          answer: userAnswer,
        };
      }
    },
  },
});
export const { setQuestions, updateAnswer } = questionSlice.actions;

export const questionsSelector = (state) => state.reducer.questions;
export default questionSlice.reducer;

export function fetchQuestions() {
  return async (dispatch) => {
    const docs = await getQuestions();
    dispatch(setQuestions(docs));
  };
}

export function updateAnswers(userName, userAnswer, userIp, index) {
  return async (dispatch, getState) => {
    dispatch(updateAnswer({ userName, userAnswer, userIp, index }));
    updateQuestion(getState().reducer.questions.questions[index]);
  };
}
