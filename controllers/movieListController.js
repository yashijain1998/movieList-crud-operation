const movies = require('../models/movieModel');

function movie(obj,reqdata) {
    let reqData = reqdata;
    Object.keys(reqData).forEach(ele => {
        obj[ele] = reqData[ele];
    })
    return obj;
}

function desiredMovie(id) {
    return movies.find((m) => m.id === parseInt(id));
}

module.exports = {movie,desiredMovie};