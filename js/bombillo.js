const $CambiarInterruptor = document.getElementById("CambiarInterruptor");
const $CambiarFoco = document.getElementById("CambiarFoco");
const $switch = document.querySelector(".switch");

function CambiarImagenes(){
    if ($CambiarFoco.src.match("assets/encendido-1.png") && $CambiarInterruptor.src.match("assets/on-or.png")){
      $CambiarFoco.src = "assets/apagado-1.png";
      $CambiarInterruptor.src = "assets/off-or.png";
    }else{
      $CambiarFoco.src = "assets/encendido-1.png";
      $CambiarInterruptor.src = "assets/on-or.png";
    }
}

$switch.addEventListener("click", CambiarImagenes);