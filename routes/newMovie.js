var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const movieBL= require ('../models/BL');


router.post('/newMovie/save', function(req, res)
{
    res.render('createNewMovie');
    movieBL.saveMovie(req.body);
    res.send('saved');
    res.render('menu', {});
});

module.exports= router;
