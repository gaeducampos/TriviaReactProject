import React from "react";

import { nanoid } from "nanoid";

const QuestionAndAnswer = ({ question, answers, handleSelectAnswer, checkAnswer }) => {
  return (
    <div >
      <h2 className="quizz--questions">{question}</h2>
      <div className="quizz--answers">
        {answers.map((item) => {


          const answerStyle = () => {
            let style = {}
            if (item.isSelected && checkAnswer) {
              style = {
                backgroundColor: item.isCorrect ? "#94D7A2" : "#F8BCBC"
              }
            }
            else if (!item.isSelected && checkAnswer) {
              style = {
                backgroundColor: item.isCorrect ? "#94D7A2" : "white"
              }
            }
            else if (!checkAnswer) {
              style = {
                backgroundColor: item.isSelected ? "#D6DBF5" : "white"
              }
            }
            return style;
          }

          return (
            <a href=""
              key={nanoid()}
              onClick={(e) => handleSelectAnswer(e, item.id, answers, question)}
              className="quizz-answer"
              style={answerStyle()}
            >{item.value}</a>
          )
        })}
      </div>
    </div >
  )
}

export default QuestionAndAnswer