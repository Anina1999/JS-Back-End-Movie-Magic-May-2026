import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAll();

    res.render('home', { movie: movies[2] });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;