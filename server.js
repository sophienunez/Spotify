// Importaciones de módulos
import { SerialPort} from 'serialport';
import { ReadlineParser } from 'serialport';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

// Crear instancia de Express y del servidor HTTP
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuración de Express
app.use(express.json());
app.use("/mupi1", express.static("mupi1"));
app.use("/mobile", express.static("mobile"));
app.use("/play", express.static("play"));
app.use("/mupi2", express.static("mupi2"));


const protocolConfiguration = {
  path: 'COM3',
  baudRate: 9600
}

const port = new SerialPort(protocolConfiguration);
const parser = port.pipe(new ReadlineParser());

parser.on('data', (data) => {
  console.log(data);
  io.emit('input', {"key": data});
  //socket.emit('input', input);
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('input', () => {
    parser.on('data', (data) => {
      socket.emit('input', data);
    });
  })
})

// Rutas y configuración de Express
app.get('/', (req, res) => {
  res.send('Hola, mundo desde Express');
});

// Iniciar el servidor en un puerto específico
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 