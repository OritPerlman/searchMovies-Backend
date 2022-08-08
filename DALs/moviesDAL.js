const jFile = require('jsonfile');

const saveMovie = (obj) =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.writeFile(__dirname + "../dataBase/movies.json", obj, function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                resolve('created!');
            }
        })
    })
}

const getMovies = () =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "../dataBase/movies.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    })
}

module.exports= {getMovies, saveMovie}
