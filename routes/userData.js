var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const userBL= require ('../models/usersBL');


router.post('/menu/editUsers/new', function (req, res)
{
    res.render('userData');
    userBL.addUser(req.body)
    res.send('added');
});



router.post('/update', async function(req, res) {
    let lastUsername = req.body.radio;
  
    let user = await usersBL.getUser(lastUsername);
  
    let username = user.Username;
    let password = user.Password;
    let counter = user.num;
    let obj = {lastUsername, username, password, counter};
  
    res.render('updateUser',{obj});
  });

module.exports= router;