//Indico que voy a usar express

const express = require('express');

//Instancio mi servidor
const app = express();

//Indico el puerto por el que va a escuchar mi servidor
APP_PORT = process.env.PORT || 3000;	
app.listen(3000, () => console.log(`Servidor corriendo en el puerto ${APP_PORT}`));

// Indico que voy a usar path para manejar las rutas
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

//Indico que voy a usar archivos estáticos
app.use(express.static('public'));

//Indico que voy a usar el motor de plantillas EJS
app.set('view engine', 'ejs');

//Indico que voy a usar el método GET para la ruta raíz
app.get('/', (req, res) => {
    res.render('home');
});

//Indico que voy a usar el método GET para la ruta /register
app.get('/register', (req, res) => {
    res.render('register');
}
);

//Indico que voy a usar el método GET para la ruta /login
app.get('/login', (req, res) => {
    res.render('login');
}
);

//Indico que voy a usar el método GET para la ruta /productCart
app.get('/productCart', (req, res) => {
    res.render('productCart');
}
);

//Indico que voy a usar el método GET para la ruta /productDetail
app.get('/productDetail', (req, res) => {
    res.render('productDetail');
}
);

//Indico que voy a usar el método GET para la ruta /productList
app.get('/productList', (req, res) => {
    res.render('productList');
}
);

//Indico que voy a usar el método GET para la ruta /searchResults
app.get('/searchResults', (req, res) => {
    res.render('searchResults');
}
);

//Indico que voy a usar el método GET para la ruta /userProfile
app.get('/userProfile', (req, res) => {    
    res.render('userProfile');
}
);
