import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question.jsx'

const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://mcq-game-app.onrender.com/api/questions')
        setQuestions(response.data)
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    }
    fetchQuestions()
  }, [])

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestionIndex + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

return (
    <div className="app">
      {questions.length === 0 && (
        <div className="text-3xl loading-message">Loading questions...</div>
      )}
      {showScore ? (
        <div className="score-section text-2xl font-bold">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        questions.length > 0 && (
          <Question
            question={questions[currentQuestionIndex]}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        )
      )}
    </div>
  );
  
}

export default Quiz
