var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const movieBL= require ('../models/BL');
const dal = require ('../DALs/moviesDAL');
const restDAL = require ('../DALs/restDAL');

router.get('/data/:movie', async function(req, res)
{
    if(!req.session.isAdmin)
    {
        console.log(req.session.username);
    }
    let name= req.params.movie;
    let movie = await movieBL.getMovie(name)
    res.render('movieData', {movie: movie});
});

module.exports= router;