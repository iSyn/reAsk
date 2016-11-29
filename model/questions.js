const db = require('./db');
//takes a request, reponse and next call as arguments.
// queries through the database  and the results(questions) is passed to the response object
// (res.question)to be used wherever this function is exported to
function showAllQuestions(req, res, next) {
  console.log('insde showAllQuestions');
  db.any('SELECT * FROM questions ORDER BY created DESC;;')
    .then(questions => {
      res.questions = questions;
      // console.log(questions)
      next();
    })
    .catch(error => next(error));
}

//takes a request, reponse and next call as arguments.
// inserts into  the database  and the results(questions) is passed to the response object
// (res.question)to be used wherever this function is exported to
function addQuestion(req, res, next) {
db.one(`
  INSERT INTO questions (username, question_title, question_body, question_tags, votes)
  VALUES ($/username/, $/question_title/, $/question_body/, $/question_tags/, $/votes/)
  RETURNING *;
  `, req.body)
  .then(questions => {
    res.questions = questions;
    next();
  })
  .catch(error => next(error));
}

//takes a request, reponse and next call as arguments.
// updates the database by searching for the specified key and changing its
// value and the results(questions) is passed to the response object
// (res.question)to be used wherever this function is exported to
function upVoteQuestion(req, res, next) {
  console.log(req.body)
  db.none(`
    UPDATE questions
    SET votes = votes + 1
    WHERE id = ${req.params.id};
  `)
    .then(() => {
      next();
    })
    .catch(err => next(err))
}
//export all the functions so that they can be required and used later
module.exports = { showAllQuestions, addQuestion, upVoteQuestion };
