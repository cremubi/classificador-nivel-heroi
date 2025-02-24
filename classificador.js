const nomeHeroi = "Cremubi"
let xp = 0
var nivel = ""

if (xp < 1000){
    var nivel = "Ferro"
}
else if (xp >= 1000 && xp < 2000){
    var nivel = "Bronze"
}
else if (xp >= 2000 && xp < 5000){
    var nivel = "Prata"
}
else if (xp >= 5000 && xp < 7000){
    var nivel = "Ouro"
}
else if (xp >= 7000 && xp < 8000){
    var nivel = "Platina"
}
else if (xp >= 8000 && xp < 9000){
    var nivel = "Ascendente"
}
else if (xp >= 9000 && xp < 10000){
    var nivel = "Imortal"
}
else {
    var nivel = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel + ".")