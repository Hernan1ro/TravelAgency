import express from "express";

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

app.get("/", (request, response) => {
  // request - lo que enviamos : response - lo que express nos responde //
  response.send("inicio");
});
app.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});
app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

app.listen(port, () => {
  console.log(`El servidor estáa funcionando en el puerto ${port}`);
});
