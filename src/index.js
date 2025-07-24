//informações do heroi
let nomeHeroi = "Brun";
let inteligencia = 2423;
let forca = 3326;
let agilidade = 3546;
let atributosGerais = inteligencia + forca + agilidade;
let nivelHeroi;

//Verificando nivel do heroi
if (atributosGerais < 1000) {
    nivelHeroi = "Ferro";
} else if (atributosGerais >= 1001 && atributosGerais < 2000) {
    nivelHeroi = "Bronze";
} else if (atributosGerais >= 2001 && atributosGerais < 5000) {
    nivelHeroi = "Prata";
} else if (atributosGerais >= 5001 && atributosGerais < 7000) {
    nivelHeroi = "Ouro";
} else if (atributosGerais >= 7001 && atributosGerais < 8000) {
    nivelHeroi = "Planita";
} else if (atributosGerais >= 8001 && atributosGerais < 9000) {
    nivelHeroi = "Ascendente";
} else if (atributosGerais >= 9001 && atributosGerais < 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

//Mensagem de saída
console.log("O Herói " + nomeHeroi + " está no nível: " + nivelHeroi);
