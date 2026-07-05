import { Router } from "express";
import { getAllMovies } from "../repositories/movieRepository.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await getAllMovies();
    console.log(movies);

    res.render('home');
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;