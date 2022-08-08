let Tela = document.getElementById("screenColor");
let botao = document.getElementById("buttonMain");
let nomeTela = document.getElementById("screenName");

let corTela = Math.floor(Math.random() * 3) + 1;

function Troca_cor() {

    if (corTela = 1) {
        Tela.setAttribute("style", "background-image:url('/src/img/girasol.jpg')");
        nomeTela.innerHTML = "Amarelo";
    } else if (corTela = 2) {
        Tela.setAttribute("style", "background-image:url('/src/img/nuvem.jpg')");
        nomeTela.innerHTML = "Azul";
    } else {
        Tela.setAttribute("style", "background-image:url('/src/img/floresta.jpg')");
        nomeTela.innerHTML = "Aerde";
    }
    
    // switch (corTela) {
    //     case 1:
    //         Tela.setAttribute("style", "background-image:url('/src/img/girasol.jpg')");
    //         nomeTela.innerHTML = "Amarelo";
    //         break;
    //     case 2:
    //         Tela.setAttribute("style", "background-image:url('/src/img/nuvem.jpg')");
    //         nomeTela.innerHTML = "Azul";
    //         break;
    //     case 3:
    //         Tela.setAttribute("style", "background-image:url('/src/img/floresta.jpg')");
    //         nomeTela.innerHTML = "Aerde";
    //         break;

}


//Tela.setAttribute("style","background-color:#F66B0E");



botao.addEventListener("click", Troca_cor);
