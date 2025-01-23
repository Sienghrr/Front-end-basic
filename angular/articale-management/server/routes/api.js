const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const db="mongodb://localhost:27017/articledb";

router.get('/', (req, res)=>{
    res.send('response from api routes'); 
});
mongoose.connect(db).then(res=>{
    console.log('connected to database successfully');
}).catch(err=>{
    console.error('connection error');
});

router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData);
    user.save().then(registeredUser => {
        res.status(200).send(registeredUser);
    }).catch(err=>{
        console.error(err);
    });
});
module.exports = router;