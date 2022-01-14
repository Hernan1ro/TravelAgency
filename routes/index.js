import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
});

router.get("/nosotros", (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
});

router.get("/viajes", (req, res) => {
  res.render("viajes", {
    pagina: "viajes",
  });
});

router.get("/testimoniales", (req, res) => {
  res.render("testimoniales", {
    pagina: "testimoniales",
  });
});

export default router;
