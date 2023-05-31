function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      tituloMensaje.textContent = "Texto encriptado con éxito: ";
      parrafo.textContent = textoCifrado;
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
  
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        tituloMensaje.textContent = "Texto desencriptado con éxito: ";
        parrafo.textContent = textoCifrado;
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
}


function copyToClipboard() {
    const text = document.getElementById("parrafo").value;
  
    navigator.clipboard.writeText(text)
      .then(() => {
        swal('Texto copiado al portapapeles');
      })
      .catch((error) => {
        swal('Error al copiar el texto: ', error);
      });
  }


  function ocultarImagen(){
    let munecojs = document.getElementById("muneco");
    munecojs.style = "display: none "; 
    document.getElementById("parrafo").style.display = "block";
    document.getElementById("titulo-mensaje").style.display = "block";
  }

  function moverTexto(){
    let textoEncrip = document.getElementById("mensaje-encriptado").style = "top: 5%"

  }
   
 