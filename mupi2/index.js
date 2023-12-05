const socket = io();

/////////////////////////////////// instrucciones login ////////////////////7
let instrccionesLoginImg = "./img/intruccionesLogin.jpg"
let screen = 1;
let homeButton = {}

////////////////////////////////// SCANER /////////////////////////////////
let scanerImg ="./img/scaner.png"
let scanerStartTime; 

////////////////////////////////// gracias //////////////////////////////////////
let graciasImg = "./img/gracias.png";
let graciasStartTime;

function preload() {

  instrucciones2=loadImage(instrccionesLoginImg);

  scaner1 = loadImage (scanerImg);

  gracias1 = loadImage (graciasImg);

}

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("right", "0");

  homeButton = {
    x: windowWidth / 2.2,
    y: windowHeight - 80,
    width: 200, 
    height: 50
  }
}

function draw() {
  background(255, 50);
  switch (screen) {

    case 1:
      instruccionesLogin();
      break;

    case 2:
      Scaner();
      break;

    case 3:
      Gracias();
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

    default:
      break;
  }
}
function homePageInteraction(numero) {
  if (homeButton.x - homeButton.width/2 && homeButton.y + homeButton.width/2 && homeButton.y - homeButton.height/2 && homeButton.y + homeButton.height/2) {
    screen = numero;
  }
}


function instruccionesLogin(){
  image(instrucciones2,0,0,windowWidth,windowHeight)
  rectMode(CENTER);
  fill(0, 0, 255);
  noStroke()
  rect(homeButton.x, homeButton.y, homeButton.width, homeButton.height,20);
  rectMode(CORNER);
  textAlign(CENTER, CENTER);
  fill(255);
  text("¡Reclama tu premio!",homeButton.x, homeButton.y);
}


function Scaner() {
  // Verifica si es la primera vez que entras al caso 7
  if (!scanerStartTime) {
    scanerStartTime = millis(); // Establece el tiempo de inicio del escáner
  }

  // Lógica para mostrar la imagen del escáner
  image(scaner1, 0, 0, windowWidth, windowHeight);

  // Verifica si ha pasado 1 minuto desde que comenzó el escáner
  if (millis() - scanerStartTime > 30000) {
    // Si ha pasado 1 minuto, cambia al caso 8
    screen = 3;
    // Reinicia la variable de tiempo para futuros usos
    scanerStartTime = null;
  }
}



function Gracias() {
  // Verifica si es la primera vez que entras al caso 8
  if (!graciasStartTime) {
    graciasStartTime = millis(); // Establece el tiempo de inicio
  }

  // Lógica para mostrar la imagen de agradecimiento
  image(gracias1, 0, 0, windowWidth, windowHeight);

  // Verifica si han pasado 5 segundos desde que comenzó la pantalla de agradecimiento
  if (millis() - graciasStartTime > 5000) {
    // Si han pasado 5 segundos, cambia al caso 1
    window.location.replace("/mupi1");
    // Reinicia la variable de tiempo para futuros usos
    graciasStartTime = null;
  }
}


