const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const tareasRoutes = require('./routes/tareasRoutes');

const app = express()

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', tareasRoutes)

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log('Servidor levantado en el puerto 8000')
})