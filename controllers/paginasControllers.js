import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
    clase: "home",
  });
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
