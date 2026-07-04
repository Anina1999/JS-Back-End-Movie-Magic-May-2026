import express from 'express';
import { engine } from 'express-handlebars'; 

const app = express();

app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));