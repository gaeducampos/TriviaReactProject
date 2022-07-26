import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import IntroPage from './pages/introPage'
import Quizz from './components/quizz.component'
import { nanoid } from 'nanoid'

const App = () => {
  const api = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"

  const [quizzData, setQuizzData] = useState([]);

  const [isPathChanged, setIsPathChanged] = useState(false)

  const location = useLocation();

  const handleChange = () => {
    setIsPathChanged((prevPath) => {
      return location.pathname === "/"
        ? prevPath
        : !prevPath
    })
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(api).then((resp) => resp.json())
      setQuizzData(data.results);
    }
    getData()
  }, [isPathChanged])

  const quizzInfo = quizzData.map((item) => {

    const answers = item.incorrect_answers.map((item) => ({ id: nanoid(), value: item, isSelected: false, isCorrect: false }));

    answers.push({ id: nanoid(), value: item.correct_answer, isSelected: false, isCorrect: true })

    return { question: item.question, answers: answers }

  })



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/Quiz' element={<Quizz quizzInfo={quizzInfo} handleChange={handleChange} />} />
      </Routes>
    </div>
  )
}

export default App
