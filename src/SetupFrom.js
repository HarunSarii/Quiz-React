import React from "react";
import { useGlobalContext } from "./context";

const SetupFrom = (quiz) => {
  const { quiz, handleChange, handleSubmit } = useGlobalContext();
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
              className="form-input"
              min={5}
              max={20}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="from-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">Sports</option>
              <option value="mytgology">Mythology</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div className="from-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onchange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button type="submit " onClick={handleSubmit} className="submit-btn">
            Let's Go!
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupFrom;
