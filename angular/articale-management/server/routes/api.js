const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const cors = require('cors');
const db="mongodb://localhost:27017/articledb";

router.use(cors());

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
        let payload ={subject:registeredUser.username}
        let token = jwt.sign(payload,'secretkey');
        res.status(200).send({token});
    }).catch(err=>{
        console.error(err);
    });
});

router.post('/login',(req ,res)=>{
    let userData = req.body;
    User.findOne({username:userData.username}).then(user=>{
        if(!user){
            res.status(401).send("invalid username")            
        }else{
            if(user.password !== userData.password){
                res.status(401).send("invalid password")
            }else{
                let payload ={subject:user.username}
                let token = jwt.sign(payload,'secretkey');
                res.status(200).send({token});
            }

        }
}).catch(err=>{
    console.error(err)
})
;
})

router.get('/articles', (req, res) =>{
    let articles = [
        {
            "id":1,
            "title": "Stream API",
            "description": "Java Stream",
            "date":"2023-08-23"
        },
        {
            "id":2,
            "title": "Kafka",
            "description": "Introduction to Kafka",
            "date":"2023-08-23"
        },
        {
            "id":3,
            "title": "Functional Programming ",
            "description": "Functional Programming",
            "date":"2023-08-23"
        },
        {
            "id":4,
            "title": "Kafka",
            "description": "Introduction to Kafka",
            "date":"2023-08-23"
        }
    ]
    res.json(articles)
})

router.get('/paid_articles', verifyToken,(req, res) =>{
    let articles = [
        {
            "id":5,
            "title": "Stream API Paid",
            "description": "Java Stream",
            "date":"2023-08-23"
        },
        {
            "id":6,
            "title": "Kafka",
            "description": "Introduction to Kafka Paid",
            "date":"2023-08-23"
        },
        {
            "id":7,
            "title": "Functional Programming Paid",
            "description": "Functional Programming",
            "date":"2023-08-23"
        },
        {
            "id":8,
            "title": "Kafka Paid",
            "description": "Introduction to Kafka",
            "date":"2023-08-23"
        }
    ]
    res.json(articles)
})

function verifyToken(req, res ,next) {
    //check authorization
    let authorization = req.headers.authorization
    if(!authorization){
        return res.status(401).send('No authorization header provided')
    }
    // check token
    let token = authorization.split(' ')[1]
    if(token === undefined ){
        return res.status(401).send('No token provided')
    }

    // verify token
    let payload = jwt.verify(token,'secretkey',)
    if(!payload){
        return res.status(401).send('Invalid token')
    }
     
    req.userId = payload.subject;
    next();
 
}


module.exports = router;