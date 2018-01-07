const express = require('express');
const model = require('./model');

const Router = express.Router();
const User = model.getModel("user");
const usersData = require("../mock/users.json");

Router.get('/list', function(req,res){
    // User.remove({},function(err, doc){
    //     return res.json({
    //         errCode:0,
    //         data:doc
    //     })
    // })

    User.find({},(err, doc)=>{
        return res.json({
            errCode:0,
            data:doc
        })
    })
    // console.log("创建")
    // User.create({
    //     name:'小白',
    //     age:25
    // },function(err, doc){
    //     console.log("进来了");
    //     if(!err) {
    //         console.log(doc);
    //     } else {
    //         console.log(err);
    //     }
    // })
})

Router.get('/appbasic/login.do', function(req,res){
    console.log("数据" + req.query.userName);
    return res.json({
        status: 100,
        // data: usersData
        data:usersData[req.query.userName]
    })
})

module.exports = Router;
