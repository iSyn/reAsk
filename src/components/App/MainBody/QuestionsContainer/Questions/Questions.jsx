import React from 'react'
import './Questions.css'

class Questions extends React.Component {
  message(e) {
    console.log('clicked')
  }

  render() {
    return(
      <div className='question'>
        <div className='upvote-arrow'>
          <img id={this.props.id} src='http://i.imgur.com/nFn8U6a.png' onClick={this.props.likeQuestions}/>
        {/*this is where the upvote value goes*/}
          {/*<p>1</p>*/}
          <p>{this.props.votes}</p>
        </div>
        <div className='question-content'>
          {/* this is where most of the rest of the stuff goes*/}
          <h3>{this.props.question_title}</h3>
          <p>{this.props.question_body}</p>
          <p>tags: {this.props.question_tags}</p>
        </div>
      </div>
    )
  }
}

export default Questions
