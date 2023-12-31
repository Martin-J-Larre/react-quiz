import React, { useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";

export const Timer = () => {
  const { dispatch, secondsRemaining } = useQuizContext();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const time = setInterval(() => {
      dispatch({ type: "initTime" });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};
