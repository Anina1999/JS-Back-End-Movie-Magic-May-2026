import { Router } from 'express';
import artistService from '../services/artistService.js';
import { isAuth } from '../middlewares/authMiddleware.js';

const artistController = Router();

artistController.get('/create', isAuth, (req, res) => {
    res.render('artists/create');
})

artistController.post('/create', isAuth, async (req, res) => {
    const artistData = req.body;
    await artistService.create(artistData);

    res.redirect('/');
})

export default artistController;