import express from "express";
import dotenv from "dotenv";
import routerAPI from "./routes/index.js";
import db from "./config/db.js";

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use( express.json());

// La vista de la API
app.get('/', (req, res) => {
    res.status(200).send('<h1> API </h1>');
})

routerAPI(app);
app.listen( port, () => { 
    console.log(`Servidor en el ${port}`)
}) ;