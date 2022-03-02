import { Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import "./InputType.css";

const InputType = ({ type, nextQuestion, index, setText }) => {
  switch (type) {
    case "star":
      return (
        <Rating
          name={`Rating question ${index}`}
          className="questions__rating"
          value={null}
          onChange={(_, newValue) => {
            nextQuestion(newValue);
          }}
        />
      );
    case "textField":
      return (
        <>
          <TextField
            id={`opened question ${index}`}
            multiline
            rows={3}
            className="questions__opened"
            onChange={(event) => setText(event.target.value)}
          />
        </>
      );
    default:
      return <>{type}</>;
  }
};

export default InputType;
