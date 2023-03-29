const express = require('express');
const rutas = express.Router();

rutas.get('/', (req,res)=>{
    req.getConnection((err, con)=>{
       if(err) return res.send(err);

       con.query('select * from vendedor', (err, rows)=>{
        if(err) return res.send(err);

        res.json(rows);
       });
    });
});

rutas.post('/', (req,res)=>{
    req.getConnection((err, con)=>{
       if(err) return res.send(err);

       con.query('insert into vendedor set ?', [req.body], (err, rows)=>{
        if(err) return res.send(err);

        res.send('datos insertados');
       });
    });
});

module.exports = rutas