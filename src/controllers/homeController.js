import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAll();

    console.log(movies);
    res.render('home');
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;