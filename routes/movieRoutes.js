const express = require('express');
const movieListController = require('../controllers/movieListController');
let movies = require('../models/movieModel');

const router = express.Router(); 
router.use(express.json());               //middleware which is use to access request body pipeline.

/* home page */
router.get('/',(req,res) => {
    //res.send("I AM HOME PAGE");
    res.render('home');
})

/* movie list page */
router.get('/movies',(req,res) => {
    res.send(movies);
})

/* add new movie in list */
router.post('/newmovie', (req,res) => {
    const nm ={
        id: movies.length+1,
    }
    // const nm = {
    //     id: movies.length+1,
    //     name: req.body.name,       //req.query.name,  //'stranger things',
    //     type: req.body.type        //req.query.type   //'fiction'
    // }
    let newMovie = movieListController.movie(nm,req.body);
    movies.push(newMovie);
    res.send(newMovie);
})

/* update movie by movie id */
router.put('/editmovie/:id' , (req,res) => {
    let editmovie = movieListController.desiredMovie(req.params.id);
    if(!editmovie) {
        res.status(404).send("this movie you want to edit doesn't exists");
        return 
    }
    let updatedMovie = movieListController.movie(editmovie,req.body);
    res.send(updatedMovie);
})

/* delete movie */
router.delete('/deletemovie/:id', (req,res) => {
    let deletedmovie = movieListController.desiredMovie(req.params.id);
    console.log(deletedmovie);
    if(!deletedmovie) {
        res.status(404).send("this movie you want to delete doesn't exists");
        return
    }
    movies = movies.filter((m) => m.id !== parseInt(req.params.id));
    console.log(movies);
    res.send(movies);
})

module.exports = router;