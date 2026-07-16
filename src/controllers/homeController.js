import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAll();

    res.render('home', { movies, pageTitle: 'Home Page' });
});

homeController.get('/about', (req, res) => {
    console.log(req.user);
    res.render('about', { pageTitle: 'About Us'});
});

export default homeController;