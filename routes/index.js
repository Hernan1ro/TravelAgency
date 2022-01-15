import express from "express";
import {
  paginaInicio,
  paginaViajes,
  paginaTestimoniales,
  paginaNosotros,
} from "../controllers/paginasControllers.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/testimoniales", paginaTestimoniales);

export default router;
