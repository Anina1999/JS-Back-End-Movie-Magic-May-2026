import express from 'express';
import { engine } from 'express-handlebars'; 
import routes from './routes.js'

const app = express();

app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('./src/public'));
app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));