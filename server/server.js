const express = require('express');
const app = express();
const userRouter = require('./user');

app.use('/user', userRouter);


app.listen(888, function(){
    console.log("server start port 888")
})