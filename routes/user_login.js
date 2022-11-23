const express = require('express');
const loginRouter = express.Router();

loginRouter.get('/login',(req, res, next) =>{
   res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/loginuser" method="POST" id="myform"> <input type="text" name="username" id="username"> <button type="submit">login</button> </form>');
})

loginRouter.post('/loginuser',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = loginRouter;