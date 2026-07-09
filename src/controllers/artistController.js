import { Router } from 'express';

const artistController = Router();

artistController.get('/create', (req, res) => {
    res.render('artists/create');
})

export default artistController;