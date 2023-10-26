import { DataStore } from "./utils.js";
import { resolve } from "path";
import express from "express";
import customers from "./routes/customers.js";
import orders from "./routes/orders.js";
import products from "./routes/products.js";

// Définition des constantes
const DB_PATH = resolve("./data/db.json");
const PORT = 7777;

// Création d'une instance de notre db pour manipuler le fichier .json
// On l'exporte pour la partager avec les différents modules de notre app
DataStore.file = DB_PATH;
DataStore.data = {
  customers: [],
  orders: [],
  products: [],
};

const app = express();

app.use(express.json());

app.use("/customers", customers);
app.use("/orders", orders);
app.use("/products", products);

app.listen(PORT, () => {
  // Lecture du fichier db.json lors de l'initialisation de l'application
  DataStore.read();
  console.log(`listening on: 127.0.0.1:${PORT}`);
});
