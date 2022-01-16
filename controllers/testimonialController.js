const guardarTestimonial = (req, res) => {
  // Validadr formulario
  const { nombre, correo, mensaje } = req.body;

  const errores = [];
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre está vacío" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo está vacío" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje está vacío" });
  }
  if (errores.length > 0) {
    //Mostrar errores en pantalla
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
    });
  } else {
    // Almacenar en la base de datos
  }
};

export { guardarTestimonial };
