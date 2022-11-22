const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const sendmessage = require('./send_message');
const userlogin = require('./user_login');

app.use(bodyparser.urlencoded({extended: false}));
// for message send
app.use(sendmessage);
// for login page
app.use(userlogin);
//for  other routes
app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(4000);