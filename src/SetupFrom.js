import React from "react";
import { useGlobalContext } from "./context";

const SetupFrom = (quiz) => {
  return (
    <main>
      <section className="quiz quiz-section">
        <form action="clarusway-quiz">
          <h2>Clarusway Quiz</h2>
          <div className="from-control">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default SetupFrom;
