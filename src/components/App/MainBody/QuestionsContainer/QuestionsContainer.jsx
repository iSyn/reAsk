import React from 'react'
import './QuestionsContainer.css'

import Questions from './Questions/Questions.jsx'

// creating a stateless function to append iterated elements to React Components
// includes askQuestion function to trigger the modal of asking questions
const QuestionsContainer = props => {
  // am I passing props correctly?
  console.log('these are the props inside Questions -->', props);
  // making the API call to backend to fetch all questions
  // props.getAllQuestions;
  // creating a function that maps through the movies array
  const renderQuestions = props.questions.map((q, i) => {
    console.log(`rendering question ${i} of ${props.questions.length}`);

    return (
      <Questions
        key={i}
        id={q.id}
        votes={q.votes}
        question_title={q.question_title}
        question_body={q.question_body}
        question_tags={q.question_tags}
        likeQuestions={props.likeQuestions}
      />
    )
  });


  const askQuestion = () => {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  return(
    <div className='questions-container'>
      <button className='reAsk-button' onClick={askQuestion.bind(this)}>reAsk Something!</button>
      <div className='questions'>
        {/*() => {props.getAllQuestions}*/}
        {renderQuestions}
      </div>
    </div>
  );
}

export default QuestionsContainer
