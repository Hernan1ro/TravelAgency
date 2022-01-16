import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
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
    // Consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();
    //Mostrar errores en pantalla
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    // Almacenar en la base de datos
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (err) {
      console.log(err);
    }
  }
};

export { guardarTestimonial };
