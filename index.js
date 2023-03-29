const express = require('express');
const mysql = require('mysql');
const con = require('express-myconnection');
const rutas = require('./rutas');
const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host:'localhost',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'vendedores'
}

app.use(con(mysql, dbOptions, 'single'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Bienvenido a mi API'); 

});

app.use('/api', rutas)

app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo en el puerto',app.get('port'))
});