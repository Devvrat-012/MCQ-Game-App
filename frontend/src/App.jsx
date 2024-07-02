import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Quiz from './pages/Quiz.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
