import { Router } from "express";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('movies/create');
});

movieController.post('/create', (req, res) => {
    console.log(req.body);
})

export default movieController;