import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    checkAnswer,
    nextQuestion,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  /*
  
  A)1
  B)2
  C)3
  D)4
  */

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answer">
          {" "}
          correct answers: {correct}/{index}{" "}
        </p>

        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question-btn" onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  );
}

export default App;
