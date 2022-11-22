const express = require('express');
const messageRouter = express.Router();
const fs = require('fs');

messageRouter.get('/',(req, res, next) =>{
    fs.readFile('messages.txt', function(err, data) {
        if (data === undefined){
            data = '';
        } 
        res.send(`<form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/sendmessage" method="POST"">
        <p>${data}</p>
        <input type="text" name="message" id="message"> 
        <input type="hidden" name="username" id="username"> 
        <button type="submit">Send Message</button> 
        </form>`);
    }); 
})

messageRouter.post('/sendmessage',(req, res, next) => {
    console.log(req.body);
    fs.appendFile('messages.txt', ` ${req.body.username}:${req.body.message}`,function (err) {
        if (err) throw err;
        // console.log(`${localStorage.getItem('username')}:${req.body.message}`);
    })
    res.redirect('/');
})

module.exports = messageRouter;