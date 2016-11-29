import React from 'react'
import './MainBody.css'

import QuestionsContainer from './QuestionsContainer/QuestionsContainer.jsx'

class MainBody extends React.Component {
  // ok so two things
  // since we can't use component lifecycle inside of Questions Container
  // we need to call the fetch all Questions function here where there is react lifecycle
  componentWillMount() {
    console.log('inside component did mount --> ', this.props);
    this.props.getAllQuestions();
    console.log('the values of props --> ', this.props);
  }

  render() {
    return(
      <div className='content-wrapper'>
        <QuestionsContainer
            questions={this.props.questions}
            getAllQuestions={this.props.getAllQuestions}
            likeQuestions={this.props.likeQuestions}
            />
        <div className='right-side'></div>
      </div>
    )
  }
}

export default MainBody
