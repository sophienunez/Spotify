
import express from 'express';
import http from 'http';
import { dirname } from 'path';
import { Server } from 'socket.io'; 




const app = express();
app.use(express.json())
app.use("/mupi", express.static("mupi"))
app.use("/mobile",express.static("mobile"))
const server = http.createServer(app);
const io = new Server(server); // Crea una instancia de Server

// Más rutas y configuración de Express
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Servidor en ejecución en el puerto${port}');
  console.log(`http://localhost:${port}/mupi`)
  console.log(`http://localhost:${port}/mobile`)

});

// Configuración de tu servidor y comunicación con Socket.IO
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Manejo de eventos de Socket.IO
  socket.on('mensaje', (data) => {
    console.log('Mensaje recibido:', data);
    // Aquí puedes realizar acciones específicas en respuesta a eventos
  });

  // Otros eventos y lógica de Socket.IO

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

// Rutas y configuración de Express
app.get('/', (req, res) => {
  res.send('Hola, mundo desde Express');
});




