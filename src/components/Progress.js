import { useQuizContext } from "../context/QuizContext";

export const Progress = ({ numQuestions }) => {
  const { index, points, maxPossiblePoints, answer } = useQuizContext();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
