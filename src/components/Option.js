export const Option = ({ questions, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, i) => (
        <button
          className={`btn btn-option ${answer === i ? "answer" : ""} ${
            hasAnswered
              ? i === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
