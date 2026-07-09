import { Router } from 'express';
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import artistController from './controllers/artistController.js';

const routes = Router();

routes.use('/', homeController);
routes.use('/movies', movieController);
routes.use('/artists', artistController);

routes.get('*url', (req, res) => {
    res.status(404).render('404');
})

export default routes;