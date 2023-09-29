import {
  Error,
  FinishScreen,
  Footer,
  Header,
  Loader,
  Main,
  NextButton,
  Progress,
  Question,
  StartScreen,
  Timer,
} from "./components";
import { useQuizContext } from "./context/QuizContext";

function App() {
  const { status, questions, index } = useQuizContext();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen num={questions.length} />}
        {status === "active" && (
          <>
            <Progress numQuestions={questions.length} />
            <Question questions={questions[index]} />
            <Footer>
              <Timer />
              <NextButton numQuestions={questions.length} />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
