        // selection de toutes les cartes du jeu
        const cartes = document.querySelectorAll('.cartes');

        // selection du span pour le nb d'essais
        const essai = document.querySelector('span');

    // le modal de la gagne
     const modal = document.getElementById('myModal');
     const closex = document.getElementsByClassName("close")[0];
     closex.onclick = function() {
  modal.style.display = "none";
}


        let nombreEssais = 0;

        // nombre de pairs retrouves
        let nombrePairs = 0;

        // une carte n'est pas encore retourné 
        let carteRetourne = false;

        // bloquer le deck pour ne pas prendre plus de deux cartes
        let blockDeck = false;

        // declaration des variables premiereCarte et secondeCarte
        let premiereCarte, secondeCarte;





        // Pour chaque carte je rajoute un evenement clic
        cartes.forEach(function (carte) {
            carte.addEventListener('click', retournerCarte);
        })


        // Melange du deck au chargement de la page
        melanger();







        // fonction pour retourner les cartes
        function retournerCarte() {



            // si le deck est bloque on ne peut pas retourner de cartes
            if (blockDeck) {
                return;
            }
            
            // pour eviter le double clic
            if (this === premiereCarte) {
                return;
            }


            // la variable this correspond a la carte qui a ete cliqué
            // classlist.toggle rajoute une class flip si il y en a pas et l'enleve si elle existe
            this.classList.toggle('flip');
            flipSound();

            // si une premiere carte n'est pas retourné, on clique sur une premiere carte qui se retourne en lui ajoutant la classe flip
            if (carteRetourne == false) {
                carteRetourne = true;
                premiereCarte = this;
                
            }
            // si une premiere carte est retourne, on clique sur une seconde carte
            else {
                carteRetourne = false;
                secondeCarte = this;
                memesCartes();
              
            }

        }


        function memesCartes() {
            // dataset.emoticone renvoie la valeur du data-emoticone dans la div cartes du HTML
            // donc si les valeurs du data de la premiere carte et de la seconde sont les memes on laisse les deux cartes visibles
            if (premiereCarte.dataset.emoticone === secondeCarte.dataset.emoticone) {
                desactiverCartes();
                gagnant();


            }
            // si ce ne sont pas les memes on retourne les deux cartes
            else {
                remettreCartesADos();
            }
        }

        function desactiverCartes() {
            // on desactive l'evenement clic de la premiere carte
            premiereCarte.removeEventListener('click', retournerCarte);
            // on desactive l'evenement clic de la seconde carte
            secondeCarte.removeEventListener('click', retournerCarte);
            ++nombrePairs;
            console.log(nombrePairs);
            reset();
        }

        function remettreCartesADos() {

            // si les cartes ne sont pas les memes on ne peut pas retourner une autre carte jusqu'a que les deux cartes selectionnes se retournent
            blockDeck = true;


            // mettre un setTimeout pour pouvoir au moins verifier que les deux cartes ne correspondent pas
            // puis retourner les deux cartes en enlevant la class flip
            setTimeout(function () {
                premiereCarte.classList.remove('flip');
                secondeCarte.classList.remove('flip');
                reset();
                // on rajoute un nombre d'essai
                ++nombreEssais;
                essai.innerHTML = nombreEssais;
            }, 1500);

        }

        // reset des valeurs apres chaque tour
        function reset() {
            carteRetourne = false;
            blockDeck = false;
            premiereCarte = null;
            secondeCarte = null;
        }

        //melanger les cartes au debut du jeu
        function melanger() {
            cartes.forEach(function (carte) {
                let randomPosition = Math.floor(Math.random() * 16);
                carte.style.order = randomPosition;
            })
        }

        function gagnant() {
            if (nombrePairs == 8) {
                 modal.style.display = "block";
                victorySound();
            }
        }

function flipSound () {
var audio1 = document.createElement("audio");
  audio1.src = "musique/flip.wav";
  audio1.volume = 1;
  audio1.autoPlay = false;
  audio1.preLoad = true;
  audio1.controls = true;
    
    audio1.play();
    
}

function victorySound () {
var audio2 = document.createElement("audio");
  audio2.src = "musique/ukulele.mp3";
  audio2.volume = 1;
  audio2.autoPlay = false;
  audio2.preLoad = true;
  audio2.controls = true;
    
    audio2.play();
    
}




