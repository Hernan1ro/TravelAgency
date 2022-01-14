import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});

router.get("/Contacto", (req, res) => {
  res.send("Contacto");
});

export default router;
