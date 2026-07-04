import express from 'express';
import { engine } from 'express-handlebars'; 

const app = express();

app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('./src/public'));

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.get('/about', (req, res) => {
    res.render('about', { layout: false });
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));