// #####################################################################

'use strict'
require('dotenv').config({ silent: true });

const express   = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');
const session     = require('express-session');

const app = express();
const server = require('http').createServer(app);
const PORT        = process.argv[2] || process.env.port || 3000;
const mdb = require('./model/db');
const io = require('socket.io').listen(server);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
 secret: 'test',
 resave: false,
 saveUninitialized: true,
 cookie: {
   secure: false
 }
}));
server.listen(PORT, () => console.log('server here! listening on', PORT));

function sendDataPong(){
  console.log('inside pong function');
  const socket = io('http://localhost:3000');
  socket.emit('hi', {message: ' now we are lets go motherfucker'});

}

// function showAllQuestions(){
//   let me= mdb.any(`
//     SELECT *
//     FROM questions;
//    `)
//     .then((users) => {
//     //   res.users = users;
//     console.log('--> this shit', users);
//     // io.sockets.emit('allData', users);
//      sendDataPong();
//     //   // next();
//      })
//     .then()
//     // .catch(error => next(error));
// }


io.sockets.on('connection', (socket)=>{
  console.log('works');
  socket.on('you', (pingu) => {
  console.log('i hear the ping', pingu.message);
  (()=>{
    let me= mdb.any(`
    SELECT *
    FROM questions;
   `)
    .then((users) => {
    //   res.users = users;
    console.log('--> this shit', users);
    io.emit('allData', users);
     // sendDataPong();
    //   // next();
     })
    .then()
    // .catch(error => next(error));
  })()
  // showAllQuestions();
  // socket.emit('hi', {re:'mmmmmmmm'})

    // io.sockets.emit('msg', {msg: 'hi there fucker'});
      // console.log('works');
  // console.log(socket);
  }); // end of ping
}); // end of sockets.on.connect





//   }
//   io.sockets.on('disconnect', (socket)=>{
//     console.log('hate to see you leave!!!!')

//   });

// });
// io.sockets.on('ping', (socket)=>{
//       console.log('i hear the ping')
//     })


// const studentRouter = require('./routes/home');
const apiRouter  = require('./routes/api');
const teacherRouter  = require('./routes/teacher');
const userRouter = require('./routes/users')

// app.use('/', studentRouter);
app.use('/api', apiRouter);
app.use('/teacher', teacherRouter);
app.use('/users', userRouter)

