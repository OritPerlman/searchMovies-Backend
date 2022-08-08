var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const userBL= require ('../models/usersBL');
const dal = require ('../DALs/moviesDAL');
const restDAL = require ('../DALs/restDAL');

router.delete('/editUsers/delete', function(req,res)
{
    res.render('usersManage');
    userBL.deleteUser(req.body)
    res.send('deleted');
});

router.post('/editUsers/new', function (req,res)
{
    res.render('usersManage');
    userBL.addUser(req.body)
    res.send('added');
});

router.put('/editUsers/update', function (req,res)
{
    res.render('usersManage');
    userBL.editUser(req.body)
    res.send('updated')
});

module.exports= router;