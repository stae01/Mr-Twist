const express = require('express');


const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Hola');
});

app.listen(PORT, () => {

    console.log('Servidor escuchando enb el puerto 3000');

});