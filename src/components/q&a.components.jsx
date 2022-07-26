import React from "react";

import { nanoid } from "nanoid";

const QuestionAndAnswer = ({ question, answers, handleSelectAnswer, checkAnswer }) => {
  console.log(answers)
  return (
    <div >
      <h2 className="quizz--questions">{question}</h2>
      <div key={nanoid()} className="quizz--answers">
        {answers.map((item) => {

          const answerStyle = () => {
            let style = {}

            console.log(checkAnswer)
            console.log(item.isSelected)



            if (item.isSelected && checkAnswer) {
              console.log("IN")
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
              console.log("CHECK ANSWER!")
              style = {
                backgroundColor: item.isSelected ? "#D6DBF5" : "white"
              }
            }

            console.log(style)
            return style;
          }

          return (
            <a href=""
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