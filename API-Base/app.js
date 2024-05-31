require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');
const createHttpError = require('http-errors');
const app = express()
const orderRouter = require('./router/order.router')

const sequelize = require('./components/conn_sqlz')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))



app.use('/orders/v1',orderRouter)
app.use(function(req,res,next){
    let json_res = {
        url:req.url,
        method: req.method,
        message:createHttpError(404).message
    }
    res.json(json_res)
    //next()
    //next();
})

// Definir una ruta para la API
app.post('/TransConsultaSaldo', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { TransCodCuenta_debitar, TransCodCuenta_transferir, TransCantidad, TransComentario } = req.body;
  
    // Insertar los datos en la tabla transferencia de la base de datos
    const query = 'INSERT INTO transferencia (TransCodCuenta_debitar, TransCodCuenta_transferir, TransCantidad, TransComentario) VALUES (?, ?, ?, ?)';
    connection.query(query, [TransCodCuenta_debitar, TransCodCuenta_transferir, TransCantidad, TransComentario], (error, results, fields) => {
      if (error) {
        console.error('Error al realizar la consulta a la base de datos: ' + error.message);
        res.status(500).send('Error al realizar la consulta a la base de datos');
        return;
      }
      // Si la consulta se realizó con éxito, enviar una respuesta de éxito al cliente
      res.status(200).send('Datos insertados correctamente en la tabla transferencia');
    });
  });
  
const port = process.env.EXPOSED_PORT

// Ruta para la función EstadodeCuentaMonetaria
app.post('/estadodecuenta', async (req, res) => {
  const { ConsulNoTarjeta, fechaInicio, fechaFin } = req.body;
  try {
    const movimientos = await EstadodeCuentaMonetaria(ConsulNoTarjeta, fechaInicio, fechaFin);
    res.json({ movimientos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//const port = 3306

app.listen(
    port, () => console.log(`App listening on port ${port}!`)
);