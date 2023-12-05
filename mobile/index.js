let formularioRg= null;
let formularioPt= null;
let formularioVisibleReg = false; 
let formulariVisiblePt= false;
let screen = 1;
let registroImg ="./img/registro.png";
let coronaImg ="./img/corona.png";
let fondoPuntaje ="./img/registro.png";
let graciasImg = "./img/gracias.png"
let graciasStartTime;

function preload() {
  registro1 = loadImage(registroImg);
  corona1 = loadImage(coronaImg);
  fondo1=loadImage(fondoPuntaje);
  gracias1 = loadImage(graciasImg);
}


function setup() {
  formularioRg= document.getElementById("Registro"); 
  formularioPt= document.getElementById("Puesto"); 

  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("right", "0");

   // Redimensiona la imagen "corona"
   corona1.resize(200.000, 200.000);
}

function draw() {
  background(255, 112, 155);

  switch (screen) {
    case 1:
        ocultarFormularioPt()
        mostrarFormularioRg()
        Registro();

      break;

    case 2:
      ocultarFormularioRg()
      mostrarFormularioPt()
      Puesto();
      break;

    case 3:
      ocultarFormularioRg()
      ocultarFormularioPt()
      Gracias();
      break;
      
    default:
    break;

  }
}

// cambiar la pantalla al hacer clic en el botón

function BtnIrAjugar() {
  screen=2;
}

// mostrar el formulario REGISTRO
function mostrarFormularioRg() {
  formularioVisibleReg = true;
}

// cultar el formulario REGISTRO
function ocultarFormularioRg() {
  formularioVisibleReg = false;
  formularioRg.style.display = "none"; 
}


function Registro() { 
  formularioRg.style.display = formularioVisibleReg ? "flex" : "none";
  image(registro1,0,0,windowWidth,windowHeight)

}

// mostrar el formulario PUESTO
function mostrarFormularioPt() {
  formulariVisiblePt = true;
}

// ocultar el formulario PUESTO
function ocultarFormularioPt() {
  formulariVisiblePt = false;
  formularioPt.style.display = "none";
}


function Puesto(){  
  formularioPt.style.display = formulariVisiblePt ? "flex" : "none";
  image(fondo1,0,0,windowWidth,windowHeight)
  image(corona1,-10,-10)

}

function irainicio(){
  screen=3;
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
    screen=1
    // Reinicia la variable de tiempo para futuros usos
    graciasStartTime = null;
  }
}

