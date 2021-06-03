import React, { useState, useContext } from "react";
import axios from "axios";

const table = {
  sports: 21,
  mythology: 20,
  entertainment: 32,
};

const API_ENDPOINT = "https://opentdb.com/api_config.php?";

// const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [index, setİndex] = useState(0);
  const [correct, setCorrect] = useState();
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isModalOpen, setİsModalOpen] = useState(false);
};

const fetchQuesions = async (url) => {
  setLoading(true);
  setWaiting(false);
  const response = await axios(url).catch((err) => console.log(err));
  if (response) {
    const data = response.data.results;
    if (data.length > 0) {
      setQuestion(data);
      setLoading(false);
      setWaiting(false);
      setError(false);
    } else {
      setWaiting(true);
      setError(true);
    }
  } else {
    setWaiting(true);
  }

  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setİsModalOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    const { amount, category, difficulty } = quiz;

    const url = `${API_ENDPOINT} amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuesions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        question,
        index,
        correct,
        error,
        isModalOpen,
        quiz,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
