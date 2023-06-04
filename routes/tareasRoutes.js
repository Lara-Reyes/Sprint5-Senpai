const express = require("express");
const routes = express.Router();
const { hola, mostrarLista, agregarTarea, actualizarTarea, mostrarTareaPorIdUsuario,  } = require("../controllers/tareasControllers");

routes.get('/hola', hola);
routes.get('/lista', mostrarLista);
routes.get('/lista/:id', mostrarTareaPorIdUsuario);

routes.post('/agregarTarea', agregarTarea);

routes.put('/actualizar/:id', actualizarTarea);

module.exports = routes;