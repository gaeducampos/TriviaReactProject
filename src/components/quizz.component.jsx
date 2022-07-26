import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

import QuestionAndAnswer from './q&a.components'

const Quizz = ({ quizzInfo, handleChange }) => {
  const [quizz, setQuizz] = useState(quizzInfo)
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);


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

      newObjectAnswer.forEach((answer) => {
        if (answer.isSelected && answer.isCorrect) {
          setCountCorrect(prevCount => prevCount + 1)
        }
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
        key={nanoid()}
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
        {checkAnswer && <h3 className='scored--Answers'>You Scored {countCorrect}/5 correct Answers</h3>}
        {!checkAnswer && <Link onClick={toggleCheckAnswers} to='/Quiz' className='intro-btn quizz--btn'>Check Answers</Link>}
        {checkAnswer && <Link onClick={handleChange} href="/" to="/" className='intro-btn quizz--btn'>Play Again</Link>}
      </div>
    </div>
  )
}

export default Quizz;