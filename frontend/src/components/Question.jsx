import React from 'react'

const Question = ({ question, handleAnswerOptionClick }) => {
  return (
    <div className="question-section">
      <div className="question-text text-xl font-semibold mb-4">
        {question.questionText}
      </div>
      <div className="answer-section">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option === question.correctOption)}
            className="answer-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
