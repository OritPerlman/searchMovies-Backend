var express= require ('express');
var router = express.Router();
const userBL= require ('../models/usersBL');
const movieBL = require ('../models/BL');


router.get('/menu', function(req, res)
{
    res.render('menu')
});


router.get('/search', function(req, res) {
    res.render('search',{});
  });
 

  router.get('/CreateMovie', function(req, res) {
      res.render('CreateNewMovie',{});
  });


  router.get('/editUser', async function(req, res) {
  let data = await userBL.getUsers();
  let users = []
  data.users.forEach(user => {
    users.push(user.Username)
  });
  res.render('UsersManage',{obj:users});
  });

  
module.exports= router;