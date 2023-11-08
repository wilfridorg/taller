import  express  from "express" // Importa el módulo Express
//const express = require("express") se crea un servidor
import connectMoongo from "./config/db.js";
import userRouter from "./routes/user.router.js";
const app = express() // Crea una instancia de la aplicación Express
connectMoongo();


const router = express.Router(); // Crea una instancia de enrutador Express
// Define una ruta para el enrutador
app.use(express.json());
router.get('/prueba', (req,res) => {
    res.json({"msg" : " estoy en funcionamiento"})
})
// Utiliza el enrutador en la ruta "/api"
app.use('/api', router)
app.use('/futbolistas',userRouter)
// Configura el servidor para escuchar en el puerto 3000
app.listen(3000, () => {
    console.log("hola me estoy ejecuntando");
})