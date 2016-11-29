const express      = require('express');
const userModel = require('../model/users.js');
const router  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
router.post('/', userModel.userExist, (req, res) => {
  res.redirect('/');
});

// route that creates a use
router.post('/create', userModel.createUser,(req,res) =>{
  res.redirect('/');
})

// router.get('/', userModel.showAllUsers, (req, res) => {
//   res.send(res.json(res.users));
// })

module.exports = router;
