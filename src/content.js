import React, { useState, useContext } from "react";
import axios from axios

const table = {
    sports:21,
    mythology: 20,
    entertainment: 32
}

const API_ENDPOINT = 'https://opentdb.com/api_config.php?'

// const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [waiting, setWaiting] = useState(true)
    const [loading, setLoading] = useState(false)
    const [question, setQuestion] = useState([])
    const [index, setİndex] = useState(0)
    const [correct, setCorrect] = useState()
    const [error, setError] = useState(false)
    const [quiz, setQuiz] = useState({
        amount:10,
        category:'sports',
        difficulty:'easy'
     } )
    const [isModalOpen, setİsModalOpen] = useState(false)
}

const fetchQuesions = async (url) => {
    setLoading(true)
    setWaiting(false)
    const response = await axios(url)
    .catch((err) => console.log(err))
    if (response) {
        const data = response.data.results
        if (data.length > 0) {
            setQuestion(data)
            setLoading(false)
            setWaiting(false)
            setError(false)
        } else {
            setWaiting(true)
            setError(true)
        }
    } else {
        setWaiting(true)
    }

    const handleChange =(e) => {
        const
    }
}

export const useGlobalContext = () => {
    return (useContext)
}
export {AppContext, AppProvider} 