import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const app = express();

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

// Habilitar pug
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia De Viajes";
  next();
});
// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta pública
app.use(express.static("public"));

// Agregar router
app.use("/", router);

// Definir host
// const host = process.env.HOST || "0.0.0.0";
const host = "0.0.0.0";

// Definir puerto
// const port = process.env.PORT || 4000;

var port_number = process.env.PORT || 3000;

// app.listen(port_number);

app.listen(port_number, host, () => {
  console.log(
    `El servidor está funcionando en el puerto ${port_number} y host ${host}`
  );
});
