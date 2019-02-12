require ('dotenv').config();
const express= require('express');
const bodyParser= require('body-parser');
const ctrl= require('./Controller')
const session= require('express-session')
const massive= require('massive');

let {SERVER_PORT, CONNECTION_STRING, SECRET}= process.env
const app= express();
app.use(bodyParser.json());

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING)
.then(db=> {
    app.set('db', db)

app.listen(SERVER_PORT, ()=> {
    console.log(`Running on Port ${SERVER_PORT}`)
    })
});

app.post('/auth/login', ctrl.login)
app.get('/list', ctrl.studentsList)
app.post('/rating/rate', ctrl.rating)
app.get('/rating/avg', ctrl.average)
app.get(`/detail/:id`, ctrl.getDetail)
app.delete('/comment/:id', ctrl.deleteCmnt)
app.put('/update/:id', ctrl.updateCmnt)