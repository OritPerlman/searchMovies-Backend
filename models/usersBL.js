const dal = require ('../DALs/usersDAL');
const express= require ('express');
const jwt= require ('jsonwebtoken');
const session = require('express-session');
var router= express.Router();
const verify = require ('./verify');

const saveUser = (obj) =>
{
    if(verify.verifyLogIn)
    {
        dal.saveUser(obj);
    }
    else
    {
        return Error
    }
}

const editUser = (obj) =>
{
    if(verify.verifyLogIn)
    {
        dal.updateUser(obj);
    }
    else
    {
        return Error
    }
}

const getUsers = () =>
{
    if(verify.verifyLogIn)
    {
        let users= dal.getUsers();
        return users;
    }
    else
    {
        return Error
    }
}

const deleteUser = (obj) =>
{
    if(verify.verifyLogIn)
    {
        dal.deleteUser(obj);
    }
    else
    {
        return Error
    }
}

const addUser = (obj) =>
{
    if(verify.verifyLogIn)
    {
        dal.saveUser(obj);
    }
    else
    {
        return Error
    }
}

const validateDetails= (req, username, password) =>
{
    let data = getUser(username)
    if(data.username==username && data.password==password)
    {
        req.session.logIn=true
    }
    else
    {
        req.session.logIn=false
    }
}

const isAdmin = (obj) =>
{
    let data=getUserById(1)
    return (obj.username==data.username && obj.password==data.password)
}


module.exports = {saveUser, editUser, getUsers, deleteUser,addUser,validateDetails, isAdmin}