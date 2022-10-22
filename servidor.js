import bodyParser from 'body-parser';
import express from 'express';


import usuarioRuta from './router/rutaUsuario.js';

const app = express();
const port = process.env.PORT || 3000

// Habilitar lectura de formulario - bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

// carpeta publica
app.use( express.static('public'))


// Router
app.use('/auth', usuarioRuta)



/* app.use('/')

app.use('/code')
app.use('/user') */






app.listen(port, () => {console.log(`El servidor está escuchando el puerto ${port}`);});