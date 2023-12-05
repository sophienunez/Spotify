const socket = io();

////////////////////////////////////////////////////Home///////////////////////////////77
const portadasImg = ["./img/portada1.png", "./img/portada2.png"];
let portadas = [];
let indexPortada = 0;
let alternarImagenPortada = false;
let time = 0;
let screen = 1;
let homeButton = {}

///////////////////////////////////// Intrucciones //////////////////////////////////////////
let instruccionesImg ="./img/instrucciones.png"

//////////////////////////////////// Conteo///////////////////////////////////////777
const conteoImg =["./img/cuentaRegresiva3.png","./img/cuentaRegresiva2.png","./img/cuentaRegresiva1.png"];
let conteo=[];
let indexConteo=0;
let conteoBull = false;
let lastTime = 0;
let startDelay = 1000; // Tiempo de espera inicial en milisegundos
let delayTimer = startDelay;

function preload() {
  portada1 = loadImage(portadasImg[0]);
  portada2 = loadImage(portadasImg[1]);
  portadas.push(portada1);
  portadas.push(portada2);

  instrucciones1=loadImage(instruccionesImg);


  conteo3 = loadImage(conteoImg[0]);
  conteo2 = loadImage(conteoImg[1]);
  conteo1 = loadImage(conteoImg[2]);
  conteo.push(conteo3);
  conteo.push(conteo2);
  conteo.push(conteo1);

}

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("right", "0");

  homeButton = {
    x: windowWidth / 2,
    y: windowHeight - 100,
    width: 200, 
    height: 50
  }
}

function draw() {
  background(255, 50);
  switch (screen) {
    case 1:
      homePage();

      break;
    case 2:
      Instrucciones();
      break;

    case 3:
      conteoBull===true ;
      Conteo();
      break;

    case 4:
      window.location.replace("/play");
      break;

    default:
      break;
  }
}

function mousePressed() {
  switch (screen) {
    case 1:
      homePageInteraction(2)
      break;

    case 2:
      homePageInteraction(3)
      break;
  
    default:
      break;
  }
}
function homePageInteraction(numero) {
  if (homeButton.x - homeButton.width/2 && homeButton.y + homeButton.width/2 && homeButton.y - homeButton.height/2 && homeButton.y + homeButton.height/2) {
    screen = numero;
  }
}

function homePage() {
  // cambia imagen cada 7 segundos
  time++;
  if (time % 120 == 0) {
    alternarImagenPortada = !alternarImagenPortada;
    console.log(alternarImagenPortada);
  }
  if (alternarImagenPortada) {
    indexPortada = 0;
  } else {
    indexPortada = 1;
  }

  image(portadas[indexPortada], 0, 0, windowWidth, windowHeight);
  rectMode(CENTER);
  fill(0, 0, 255);
  noStroke()
  rect(homeButton.x, homeButton.y, homeButton.width, homeButton.height,20);
  rectMode(CORNER);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Pulsa para continuar",homeButton.x, homeButton.y);
}

function Instrucciones(){
  image(instrucciones1,0,0,windowWidth,windowHeight)
  rectMode(CENTER);
  fill(0, 0, 255);
  noStroke()
  rect(homeButton.x, homeButton.y, homeButton.width, homeButton.height,20);
  rectMode(CORNER);
  textAlign(CENTER, CENTER);
  fill(255);
  text("¡Vamos a jugar!",homeButton.x, homeButton.y);
}


function Conteo() {
  // Lógica para mostrar la imagen según el índice actual
  image(conteo[indexConteo], 0, 0, windowWidth, windowHeight);

  // Resto de la lógica de la función Conteo
  rectMode(CENTER);
  fill(0, 0, 255);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(255);

 // Reducción del temporizador de retraso
 delayTimer -= deltaTime;

 // Si el temporizador alcanza cero, inicia el cambio de imagen
 if (delayTimer <= 0) {
   // Cambiar la imagen cada 5 segundos
   if (millis() - lastTime > 1000) {
     cambiarImagen();
     lastTime = millis();
   }
 }
}

function cambiarImagen() {
  switch (indexConteo) {
    case 0:
      console.log("imagen3");
      break;
    case 1:
      console.log("imagen2");
      break;
    case 2:
      console.log("imagen1");
      screen =4;
      break;

    default:
      break;
  }

  // Incrementar el índice y asegurarse de que vuelva a 0 después de llegar a 2
  indexConteo = (indexConteo + 1) ;
}

function Play() {
  // Envía un mensaje al servidor indicando que se ha activado Play
  socket.emit('playActivated');
}