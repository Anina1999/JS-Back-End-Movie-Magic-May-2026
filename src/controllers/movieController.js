import { Router } from "express";
import movieService from "../services/movieService.js";
import artistService from "../services/artistService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const movieController = Router();

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);

    res.render('movies/search', { movies, filter, pageTitle: 'Search Movies' });
})

movieController.get('/create', isAuth, (req, res) => {
    res.render('movies/create', { pageTitle: 'Create Movie' });
});

movieController.post('/create', isAuth, async (req, res) => {
    const newMovie = req.body;
    const userId = req.user.id;

    await movieService.create(newMovie, userId);
    
    res.redirect('/');
})

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const userId = req?.user?.id;

    const movie = await movieService.getById(movieId);
    const isOwner = movie.userId && movie.userId === userId;

    const rating = Math.floor(movie.rating);
    const ratingStars = '&#x2605;'.repeat(movie.rating);    

    res.render('movies/details', { movie, pageTitle: 'Movie Details', ratingStars, isOwner });
});

movieController.get('/:movieId/attach', isAuth,async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getById(movieId);
    const artists = await artistService.getAll({ exclude: movie.cast.map(a => a.id) });

    res.render('movies/attach', { pageTitle: 'Attach Artist', movie, artists });
});

movieController.post('/:movieId/attach', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const artistId = req.body.artist;

    await movieService.attachArtist(movieId, artistId);

    res.redirect(`/movies/${movieId}/details`);
});

export default movieController;