// let listadecompras = ["ovos", "leite", "manteiga"];

// let listadecompras = []
// listaDeCompras [0] = "ovos";
// listaDeCompras [1] = "leite";
// listaDeCompras [2] = "manteiga";

// let listaDeCompras = [];
// listaDeCompras.push("açucar");
// listaDeCompras.push("feijão");
// listaDeCompras.push("arroz");


let tentativas = 0;
let numeroRandomico = Math.floor(Math.random() * 100) + 1;

function checarTentativa(){
    tentativas++;

    if(tentativas ==10){
        alert("Game over");
        perdeu();
        return;
    }
    alert (tentativas);
}

function perdeu(){
    // tentativas = 0
    // numeroRandomico = Math.floor(Math.random() * 100) + 1;
    window.location.reload();
    // window.location = "/perdeu.html";
}