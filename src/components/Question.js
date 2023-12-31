import React from "react";
import { Option } from "./";
import { useQuizContext } from "../context/QuizContext";

export const Question = ({ questions }) => {
  const { answer, dispatch } = useQuizContext();
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
};
