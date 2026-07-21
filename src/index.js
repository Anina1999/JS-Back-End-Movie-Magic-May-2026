import express from 'express';
import { engine } from 'express-handlebars'; 
import routes from './routes.js'
import { authMiddleware } from './middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';
import "dotenv/config";

const app = express();
//setup handlebars
app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

//setup static assets
app.use(express.static('./src/public'));
//setup body parser
app.use(express.urlencoded());

//setup cookie parser
app.use(cookieParser());

//auth middleware
app.use(authMiddleware);
//setup routes
app.use(routes);

//start the server
app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));