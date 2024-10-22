

let botaoSom = document.querySelector(".botao-som")
let desligaSom = document.querySelector("#desliga-som")
let video = document.querySelector(".video")
let botaoInfo = document.querySelector(".link-info")
let botaoModal= document.querySelector(".modal")
let assitirFilme= document.querySelector("#link-assistir")


function playSound() {
    let audio = new Audio('audio/audio_tudum-netflix-sound.mp3'); 
    audio.play();
}
    

botaoSom.addEventListener("click", ligaSom)
desligaSom.addEventListener("click" ,somMudo)



function ligaSom() {
    
    video.muted = false
}


 function somMudo() {
    video.muted = true
    
 }





botaoInfo.addEventListener("click", mostraModal )
botaoModal.addEventListener("click", escoderModal)


function mostraModal() {
   escoderModal 
    botaoModal.style.display = "block"
    
    
}

function escoderModal () {
   
    botaoModal.style.display = "none"
    
    
}
