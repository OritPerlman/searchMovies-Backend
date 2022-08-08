var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const movieBL= require ('../models/BL');
const dal = require ('../DALs/moviesDAL');
const restDAL = require ('../DALs/restDAL');

router.get('/search', function(req, res)
{
    if(req.body.name == '' && req.body.Genre == '' && req.body.Language == '')
    {
      res.render('search',{});
    }
    else
    {
      if(!req.session.isAdmin)
      {
        console.log(req.session.username)
      }
      let data = await movieBL.getMovie(req.body);
      res.render('searchResult',{obj : data});
    }
  });
module.exports= router;