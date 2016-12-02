import React from 'react'
import './AskQuestionsModal.css'

class AskQuestionsModal extends React.Component {

  cancelQuestionBtn() {
    // Declare variables
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    // Hides the modal and opaque background
    askQuestionModal.style.display = 'none'
    coverThePage.style.display = 'none'

    // Reset values
    title.value = ''
    question.value = ''
    tags.value = ''
  }

  askQuestionBtn() {
    // Declare variables

    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')
    const questions = document.querySelector('.questions')

    // Grabbing the values in each textarea
    let title = document.querySelector('#title')
    let question = document.querySelector('#question')
    let tags = document.querySelector('#tags')

    // creating new object to pass to DB
    const questionBody = {
      'username': 'taka',
      'question_title': title.value,
      'question_body': question.value,
      'question_tags': tags.value,
      'votes': 1,
    }

    title.style.border = '1px solid darkgrey'
    question.style.border = '1px solid darkgrey'

    if (title.value != '' && question.value != '') {
      console.log('this is the question body: -->> ', questionBody);
      this.props.createNewQuestion(questionBody);

      // Hides the modal and opaque background
      askQuestionModal.style.display = 'none'
      coverThePage.style.display = 'none'

      // Reset values
      title.value = ''
      question.value = ''
      tags.value = ''

    } else {
      if (title.value != '') {
        question.style.border = '2px solid red'
      } else if (question.value != '') {
        title.style.border = '2px solid red'
      }
    }
  }

  render() {
    return(
      <div className='ask-question-modal'>
        <header>Ask a Question!</header>

        <div className='input-question-container'>

          <div className='input-title'>
            <p>Title *</p>
            <textarea id='title' rows="1" cols="70" placeholder="TLDR of your question!"></textarea>
          </div>
          <div className='input-question'>
            <p>Question *</p>
            <textarea id='question' rows="18" cols="70" placeholder="Write your question here!"></textarea>
          </div>
          <div className='input-tags'>
            <p>Tags</p>
            <textarea id='tags' rows="1" cols="70" placeholder="Separate each tag with a comma and a space!"></textarea>
          </div>
        </div>

        <div className='button-container'>
          <button className='cancel-question-btn' onClick={this.cancelQuestionBtn.bind(this)}>I changed my mind...</button>
          <button className='ask-question-btn' onClick={this.askQuestionBtn.bind(this)}>Ask away!</button>
        </div>
      </div>
    )
  }
}

export default AskQuestionsModal
