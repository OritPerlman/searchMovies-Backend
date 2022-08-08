const WSdal= require ('../DALs/restDAL');
const NEWdal= require ('../DALs/moviesDAL');
const jFile= require ('jsonfile');
const verify = require('./verify');

const getMovie = async (obj) =>
{
    if(verify.verifyLogIn)
    {
        let movies = WSdal.getMovies;
        let newMovies = NEWdal.getMovies;
        let arr= [];
        let count=0;
        movies.forEach(x => 
            {
                if (x.name== obj.name || x.genres==obj.genre || x.language==obj.language)
                {
                    arr[count]= x
                    count++;
                }        
            });
        newMovies.forEach(x =>
            {
                if (x.name== obj.name || x.genres==obj.genre || x.language==obj.language)
                {
                    arr[count]= x
                    count++;
                }     
            });
        return arr
    }
    else
    {
        return Error
    }
}

const getMoviesByGenre = async (obj) =>
{
    if(verify.verifyLogIn)
    {
        let movies = WSdal.getMovies;
        let newMovies = NEWdal.getMovies;
        let arr= [];
        let count=0;
        movies.forEach(x => 
        {
            if (x.genres==obj.genre)
            {
                arr[count]= x
                count++;
            }        
        });
        newMovies.forEach(x =>
        {
            if (x.genres==obj.genre)
            {
                arr[count]= x
                count++;
            }     
        });
        return arr
    }
    else
    {
        return Error
    }
}


const saveMovie = (obj) =>
{ 
    if(verify.verifyLogIn)
    {
        return NEWdal.saveMovie(obj);
    }
    else
    {
        return Error
    }
}
module.exports = {getMovie, saveMovie, getMoviesByGenre}