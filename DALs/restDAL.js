const axios = require ('axios');
const getMovies = () =>
{
    return axios.get("https://api.tvmaze.com/shows")
}

const getMovie = (id) =>
{
    return axios.get("https://api.tvmaze.com/shows/" + id)
}

const saveMovie = (obj) =>
{
    return axios.post("https://api.tvmaze.com/shows", obj)
}

const updateMovie = (obj) =>
{
    return axios.put("https://api.tvmaze.com/shows", obj)
}

const deleteMovie = (obj) =>
{
    return axios.delete("https://api.tvmaze.com/shows", obj)
}


module.exports = {getMovies, saveMovie, updateMovie, deleteMovie, getMovie}