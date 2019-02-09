const perso1 = document.querySelector('.perso1');
const perso2 = document.querySelector('.perso2');
const rebours = document.querySelector('.rebours');

 var audio1 = document.createElement("audio");
  audio1.src = "ikkaku2.mp3";
  audio1.volume = 1;
  audio1.autoPlay = false;
  audio1.preLoad = true;
  audio1.controls = true;

let cpt = 3; // valeur du compte a rebours au debut du combat



let perso1Attaque = false; // le perso1 n'attaque pas encore donc valeur false
let perso2Attaque = false; // idem avec perso2

 let peutAttaquer = false;
compteRebours();



// animation du perso1
function perso1bouge() {

    perso1.style.left = "45%";
    perso1.setAttribute("src", "img/byakuya6.png");
    perso2.setAttribute("src", "img/ikkakuKO.png");

}

// perso1 bouge lorsqu'on appuie sur la touche a

document.onkeydown = (event) => {
    if (event.keyCode === 65 && peutAttaquer == true && perso2Attaque == false) // si j'appuie sur la touche A , que le compte a rebours est fini et que le perso2 n'a pas encore attaquer
    {
        perso1Attaque = true;
        perso1bouge();

    }
    if (event.keyCode === 65 && peutAttaquer == false) {
        alert('Joueur 1 a tapé trop tôt ');

    }

}


// animation du perso2
function perso2bouge() {
    
    perso2.style.right = "45%";
    perso2.setAttribute("src", "img/ikkaku6.png");
    perso1.setAttribute("src", "img/byakuyaKO.png");
   

}

// perso2 bouge lorsqu'on appuie sur la touche entree
document.onkeypress = (event) => {
    if (event.keyCode === 48 && peutAttaquer == true && perso1Attaque == false) // si j'appuie sur la touche entree , que le compte a rebours est fini et que le perso1 n'a pas encore attaquer
    {
     
        perso2Attaque = true;
        perso2bouge();


    }
    if (event.keyCode === 48 && peutAttaquer == false) {
        alert(' joueur 2 a tapé trop tot ');
  
    }
}




// compte a rebours
function compteRebours() {

   
    let timer = setInterval(() => {
        if (cpt > 0) {
            reboursEnCours = true;
            --cpt; // décrémente le compteur
            rebours.innerHTML = cpt; // affiche le comptteur
            if (cpt <= 0) {
                rebours.innerHTML = "";
                setInterval(() => {
                    rebours.innerHTML = "<span class='now'>!</span>";
                    peutAttaquer = true;
                }, Math.random() * (7000 - 3000) + 3000);
            }
        } else {
            clearInterval(timer);
        }

    }, 1000);
}
