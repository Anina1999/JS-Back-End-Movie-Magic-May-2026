import { Router } from 'express';

const artistController = Router();

artistController.get('/create', (req, res) => {
    res.render('artists/create');
})

artistController.post('/create', (req, res) => {
    const artistData = req.body;
    console.log('Artist Data:', artistData); // Log the received data for debugging

    res.redirect('/');
})

export default artistController;