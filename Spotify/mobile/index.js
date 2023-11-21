let formularioRg= null;
let formularioPt= null;
let formularioVisibleReg = false; 
let formulariVisiblePt= false;
let screen = 1;
let registroImg ="./img/registro.png";
let coronaImg ="./img/corona.png";
let fondoPuntaje ="./img/registro.png";
let graciasImg = "./img/gracias.png"

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
  function BtnIrAjugar() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
  
    // Registra al usuario en Firebase
    firebase.auth().createUserWithEmailAndPassword(correo, "CONTRASEÑA_POR_DEFECTO")
      .then((userCredential) => {
        // El usuario se registró exitosamente
        console.log("Usuario registrado con éxito:", userCredential.user);
  
        // Puedes realizar acciones adicionales aquí, como redireccionar a otra página
      })
      .catch((error) => {
        // Manejar errores durante el registro
        console.error("Error al registrar usuario:", error.message);
      });
  }
  
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

function Gracias(){
  image(gracias1,0,0,windowWidth,windowHeight)
}

