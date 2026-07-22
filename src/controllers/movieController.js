import { Router } from "express";
import movieService from "../services/movieService.js";
import artistService from "../services/artistService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import * as z from "zod"; 
import { createMovieSchema } from "../schemas/movieSchema.js";

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

    try {
        const movieData = createMovieSchema.parse(newMovie);

        await movieService.create(movieData, userId);
        res.redirect('/');
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors = z.flattenError(error).fieldErrors;
            console.log(errors);

            res.status(400).render('movies/create', { movie: req.body, errors, pageTitle: 'Create Movie' })
        }
    }
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

movieController.get('/:movieId/delete', isAuth, async (req, res) => {
    const movieId = Number(req.params.movieId);
    const userId = req?.user?.id;

    await movieService.remove(movieId, userId);

    res.redirect('/');
})

function prepareCategoryViewData(movie) {
    const categories = ['TV Show', 'Animation', 'Movie', 'Documentary', 'Short Film'];
    const categoryOptions = categories.map(c => {
        const value = c.toLowerCase().replaceAll(' ', '-');
        const option = {
            value,
            label: c,
            selected: movie.category === value
        }

        return option;
    });

    return categoryOptions;
}

movieController.get('/:movieId/edit', isAuth, async (req, res) => {
    const movieId = Number(req.params.movieId);
    const userId = req.user.id;

    const movie = await movieService.getById(movieId);

    if (movie.userId !== userId) {
        return res.status(401).send('Unauthorized to edit this movie');
    }

    const categoryOptions = prepareCategoryViewData(movie);

    res.render('movies/edit', { pageTitle: 'Edit Movie', movie, categoryOptions });
})

movieController.post('/:movieId/edit', isAuth, async (req, res) => {
    const movieId = Number(req.params.movieId);
    const userId = req.user.id;
    const updatedMovieData = req.body;

    await movieService.edit(movieId, userId, updatedMovieData);

    res.redirect(`/movies/${movieId}/details`);
})

export default movieController;