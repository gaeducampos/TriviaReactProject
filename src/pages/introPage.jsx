import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const IntroPage = ({ handleChange }) => {


  return (
    <div className='intro--container'>
      <h1 className='intro-title'>Quizzical</h1>
      <h3 className='intro--description'>Ready to solve this quizz? Press The button to start!</h3>
      <Link to="/Quiz" className='intro-btn'>Start Quizz</Link>
    </div >
  )
}

export default IntroPage;

