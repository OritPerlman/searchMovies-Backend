var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const movieBL= require ('../models/BL');
const dal = require ('../DALs/moviesDAL');
const restDAL = require ('../DALs/restDAL');

router.get('/menu/search/search', function (req, res)
{
    var movies =movieBL.getMoviesByGenre(req.body)
    res.render('searchResult', {movies: movies});
});

router.get('/menu/search/search/data/back', function (req, res)
{
    var movie =movieBL.getMovie(req.body)
    res.render('movieData', {movie: movie});
});

module.exports= router;