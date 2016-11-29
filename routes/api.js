require('dotenv').config({ silent: true });
const express = require('express');
const router = express.Router();
const {showAllStudents,showAllTeachers} = require('../model/users');
const {showAllQuestions, addQuestion, upVoteQuestion} = require('../model/questions')
// get request for data about students to api
router.get('/students', showAllStudents, (req, res) => {
  // res.send('the api route for students data  is set up...this will show all data for stucents')
   res.json(res.students|| []);
});

// get request for data about teachersto api
router.get('/teachers', showAllTeachers, (req, res) => {
  // res.send('the api route for teachers data  is set up...this will show all data for teachers')
    res.json(res.teachers|| []);
});


//get request for data about questions to api
router.get('/questions', showAllQuestions,(req, res) => {
 res.json(res.questions || []);
});

// post request to add question to DB..the addquestion middleware is required from the model
router.post('/questions', addQuestion, (req, res) => {
 res.send('has been posted');
});

router.put('/questions/:id', upVoteQuestion,  (req, res) => {
  res.send('question liked!')
});

// router.post('/', (req, res) => {
// res.send('fuck you')
// })

// router.put('/:id', (req, res) => {
// res.send('fuck you times 2')
// })


module.exports = router;
