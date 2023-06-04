const { Tarea } = require('../database/db');

exports.hola = (req, res) => {
  res.status(200).json({ mensaje: "Hola mundo" });
};

exports.mostrarLista = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json({ listaDeTareas: tareas });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener las tareas" });
  }
};

exports.agregarTarea = async (req, res) => {
  const { titulo, prioridad_id, usuario_id, completado } = req.body;
  if (
    !req.body.hasOwnProperty("titulo") ||
    !req.body.hasOwnProperty("prioridad_id") ||
    !req.body.hasOwnProperty("usuario_id") ||
    !req.body.hasOwnProperty("completado")
  ) {
    res.status(400).json({ message: "Faltan datos de la tarea" });
    return;
  }

  try {
    const tareaCreada = await Tarea.create({
      titulo,
      prioridad_id,
      usuario_id,
      completado,
    });
    res.status(200).json({ mensaje: "Tarea agregada", tarea: tareaCreada });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};

exports.actualizarTarea = async (req, res) => {
  const id = req.params.id;

  try {
    const tarea = await Tarea.findOne({ where: { id: id } });

    if (!tarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    const { titulo, prioridad_id, usuario_id, completado } = req.body;

    tarea.titulo = titulo || tarea.titulo;
    tarea.prioridad_id = prioridad_id || tarea.prioridad_id;
    tarea.usuario_id = usuario_id || tarea.usuario_id;
    tarea.completado = completado || tarea.completado;

    const tareaActualizada = await tarea.save();

    res.json({ mensaje: "Tarea actualizada", tarea: tareaActualizada });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar la tarea" });
  }
};


exports.mostrarTareaPorIdUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const tareas = await Tarea.findAll({
            where: {
                usuario_id: id
            }
        });
        res.status(200).json({tareas});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Error al mostrar las tareas del usuario." })
    }
};

