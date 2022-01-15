import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia De Viajes";
  next();
});

// Definir la carpeta pública
app.use(express.static("public"));

// Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor estáa funcionando en el puerto ${port}`);
});
