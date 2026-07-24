import { Router } from 'express';
import artistService from '../services/artistService.js';
import { isAuth } from '../middlewares/authMiddleware.js';
import { createArtistSchema } from '../schemas/artistSchema.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const artistController = Router();

artistController.get('/create', isAuth, (req, res) => {
    res.render('artists/create');
})

artistController.post('/create', isAuth, async (req, res) => {
    const artistData = req.body;

    try {
        const artistData = createArtistSchema.parse(req.body);
        await artistService.create(artistData);

        res.redirect('/');
    } catch (err) {
        const error = getErrorMessage(err);

        res.status(400).render('artists/create', { artist: req.body, error });
    }
});

export default artistController;