import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

import QuestionAndAnswer from './q&a.components'

const Quizz = ({ quizzInfo, handleChange }) => {
  const [quizz, setQuizz] = useState(quizzInfo)
  const [checkAnswer, setCheckAnswer] = useState(false);


  const handleSelectAnswer = (e, id, answers, question) => {
    e.preventDefault()
    setQuizz((prevQuizz) => {
      const newQuizz = [...prevQuizz]
      const questionIndex = newQuizz.findIndex(element => element.question === question)
      const newObjectAnswer = answers.map((answer) => {
        return answer.id === id
          ? { ...answer, isSelected: !answer.isSelected }
          : { ...answer, isSelected: false }
      })


      newQuizz[questionIndex].answers = newObjectAnswer

      return newQuizz

    })
  }

  const toggleCheckAnswers = () => {
    setCheckAnswer(true)
  }


  const displayQuiz = quizz.map((item) => {
    return (
      <QuestionAndAnswer
        handleSelectAnswer={handleSelectAnswer}
        question={item.question}
        answers={item.answers}
        checkAnswer={checkAnswer}
      />
    )
  })

  return (
    <div className='quiiz-container'>
      {displayQuiz}
      <div className='quizz-btn--container'>
        {!checkAnswer && <Link onClick={toggleCheckAnswers} to='/Quiz' className='intro-btn quizz--btn'>Check Answers</Link>}
        {checkAnswer && <Link onClick={handleChange} href="/" to="/" className='intro-btn quizz--btn'>New Quiz</Link>}
      </div>
    </div>
  )
}

export default Quizz;