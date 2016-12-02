import React from 'react'
import './App.css'

//import all other smaller components that the parent wants to use
import AskQuestionsModal from './Modals/AskQuestionsModal/AskQuestionsModal.jsx'
import SignInModal from './Modals/SignInModal/SignInModal.jsx'
import SignUpModal from './Modals/SignUpModal/SignUpModal.jsx'
import MainBody from './MainBody/MainBody.jsx'

//create a component named app
class App extends React.Component {
//use the constructor function along with super to bring in all properties of parent
  constructor(props) {
    super(props);
    //set whatever initial states that will be changed or modified over time
      this.state = {
      questions: [],
      currentQuestionTitle: '',
      currentQuestionBody: ''
    }
  }

  componentWillMount() {
    console.log('inside component mount Appjsx for socket');
    this.socketFunction();
  }

  socketFunction(){
    console.log('inside socket function');
    // const socket = io('http://localhost:3000');
    const socket = io();
    console.log('socket is ', socket)
    socket.on('msg', (content) => {
    console.log('data on front end side', content);
    })
    socket.on('allData', (allQuestions) => {
      console.log('user side APPJSX', allQuestions);
      this.setState({
        questions: allQuestions
      });
      console.log('values of the state', this.state);

    })
    // socket.on('hi', (yo) => {
    //   console.log('yooooooo' );

    // })
  }

  //   socket.on('connection', function(socket){
  //     console.log('shit');
  // socket.on('msg', function(msg){
  //   console.log('message: ' + msg);
  // });

//function to ping my server and let it now that i am alive
sendDataPing(){
  console.log('inside ping function');
  const socket = io('http://localhost:3000');
  socket.emit('you', {message: 'lets go motherfucker'});

}

//function call to the api to retrieve all questions
getAllQuestions(){
  console.log('inside of getAllQuestions APPjsx ')
  fetch('/api/questions/')
  //data is returned in the form of json
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      // the state of the question array is updated and passed the value thats held in the
      // data object
      // console.log('this inside of getAllQuestions: ', this);
      this.setState({
        questions: data
      });
      // console.log('the true values of state --> ', this.state);
    })
     // .then(this.getAllQuestions())
    .catch(err => console.log(err));
}

// function to send a post to DB and add new question...fetches the data from api
// and sends a post request and then calls tge get all questions after wards
createNewQuestion(question) {
  console.log('inside create new question');
  console.log('the OBJ of question -->> ', question);
  fetch('/api/questions', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(question)
  })
  .then(this.sendDataPing)
  // .then( data => {
  //   console.log('.then works');
  //   console.log('--->>> this inside of createNewQuestion: ', this);
  //   this.createNewQuestion.sendDataPing;
  // })
  .catch(err => console.log(err));
}

likeQuestions(event) {
  console.log(event.target.id)
  let q = event.target.id;
  fetch(`/api/questions/${q}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({id: q})
  })
    .then(this.sendDataPing)
    .catch(err => console.log(err));
}


  hideCoverPage() {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const createAccountModal = document.querySelector('.create-account-modal')
    const loginAccountModal = document.querySelector('.login-account-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'none'
    coverThePage.style.display = 'none'
    createAccountModal.style.display = 'none'
    loginAccountModal.style.display = 'none'
  }

  login() {
    const createAccountModal = document.querySelector('.create-account-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    createAccountModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  render() {
    return(
      <div className='page-container'>

        <SignUpModal />
        <SignInModal />
        <AskQuestionsModal
          createNewQuestion={this.createNewQuestion.bind(this)}
        />
        <div className='cover-the-page' onClick={this.hideCoverPage.bind(this)}></div>

        <div className='header-container'>
          <header className='main-header'>reAsk</header>
          <button className='login-btn' onClick={this.login.bind(this)}></button>
        </div>

        <MainBody
          getAllQuestions={this.getAllQuestions.bind(this)}
          questions={this.state.questions}
          likeQuestions={(event) => this.likeQuestions(event)}
        />
        <footer><a href='https://github.com/Project-3-Best-Group/reAsk'>Made with <span className='heart'>&hearts;</span></a></footer>
      </div>
    )
  }
}

export default App
