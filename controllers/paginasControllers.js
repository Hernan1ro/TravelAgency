import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
  // consultar 3 viajes del modelo
  const promisesDB = [];
  promisesDB.push(Viaje.findAll({ limit: 3 }));
  promisesDB.push(Testimonial.findAll({ limit: 3 }));
  try {
    const respuesta = await Promise.all(promisesDB);
    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: respuesta[0],
      testimoniales: respuesta[1],
    });
  } catch (err) {
    console.log(err);
  }
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  // Consultar base de datos
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Próximos viajes",
    viajes,
  });
};
// Muestra los detalles del viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  // Consultar base de datos
  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Información Viaje",
      viaje,
    });
  } catch (err) {
    console.log(err);
  }
};

const paginaTestimoniales = async (req, res) => {
  // Consultar base de datos
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (err) {
    console.log(err);
  }
};

export {
  paginaInicio,
  paginaViajes,
  paginaTestimoniales,
  paginaNosotros,
  paginaDetalleViaje,
};
