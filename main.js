// input ou le joueur entre son texte et le button de validation
let inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);
let buttonValider = document.getElementById("btnValiderMot");
console.log(buttonValider);
//endroit ou le mot sera affiché ainsi que l'endoit ou le score sera affiché
let divZoneProposition = document.querySelector(".zoneProposition");
console.log(divZoneProposition)
let spanScore = document.querySelector(".zoneScore span")
console.log(spanScore)
let buttonRadio = document.querySelectorAll("optionSource input");
console.log(buttonRadio)
lancerJeu()