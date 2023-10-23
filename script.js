// let listeMots = ["Cachalot", "Pétunia", "Serviette"]
// let listePhrases = ["Pas de panique!", "La vie, l'univers et le reste", "Merci pour la pomme"]
let score=0
function afficherResultat(score,nombreMotsProposés){
let spanScore = document.querySelector(".zoneScore span")
let affichageScore = `${score}/${nombreMotsProposés}` //interpolation: permet generer ceci dans le html
spanScore.innerHTML= affichageScore
    //afficher resultat
console.log("Votre score est " + score + "/" + nombreMotsProposés);
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerHTML = proposition
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom(nom){
    if(nom.length < 2){
       throw new error("le nom est trop court");
       
    }
}

function validerEmail(email){
    let emailRegExp = new RegExp("^[a-z0-9_-]+@[a-z0-9_-]+\\.[a-z0-9_-]+$")
    if(emailRegExp.test(email)){
       throw new error("l'email n'est pas valide")
    }
}


function afficherMessageErreur(message){
    let popup = document.querySelector(".popup")
    let spanErrorMessage = document.getElementById("errorMessage")
    let spanErrorMessage = document.createElement("span")
    spanErrorMessage.id = "errorMessage"
    spanErrorMessage.innerText = message
    popup.append(spanErrorMessage)
}

function gererFormulaire(scoreEmail){
    try{
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        validerNom(nom)
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        validerEmail(email)
    
        // if( && ){
        //     afficherEmail(nom,email,scoreEmail)
    
        // }else{
        //     console.log("erreur")
        // }
    
    } catch{//gerer l'erreur

    }
    
}
    function lancerJeu(){
        //elle s'occupe de lancer toutes les autres fonction, elle sera donc fonction principale
        initAddEventListenerPopup()
        let score=0
        let i=0
        let listeProposition = listeMots
        let btnValiderMot = document.getElementById("btnValiderMot")//recupere du html
        let inputEcriture = document.getElementById("inputEcriture")
        afficherProposition(listeProposition[i])
        btnValiderMot.addEventListener("click",()=> {//affiche la value de la zone de saisie dans la console lorsque le button est clické 
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeProposition[i]){//incrementer le score après comparaison
            score++
        }
        i++
        afficherResultat(score,i)
        inputEcriture.value = ""// efface le mot dans la zone de saisie après avoir clické valider
        if(listeProposition[i] === undefined){ // termine le jeu
            afficherProposition("le jeu est fini")
            btnValiderMot.disabled = true
        }else{
            afficherProposition(listeProposition[i])
        }
        })
        afficherResultat(score,i)


        let listeBtnRadio = document.querySelectorAll(".optionSource input")
        for(let j=0; j< listeBtnRadio.length; j++){
            listeBtnRadio[j].addEventListener("change", (event) =>{
                console.log(event.target.value) // permet de savoir sur quel des 2 buttons l'on a cliqué
                if(event.target.value === "1"){
                    listeProposition = listeMots
                }else{
                    listeProposition = listePhrases
                }
                afficherProposition(listeProposition[i])
            })
        }
        let form = document.querySelector("form")
        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            let scoreEmail = `${score}/${i}`
            gererFormulaire(scoreEmail)
           
        })
    }

//     let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
// console.log(baliseZonePropositionSpan);
// let listeInputRadio = document.querySelectorAll(".zoneChoix input");
// console.log(listeInputRadio);

