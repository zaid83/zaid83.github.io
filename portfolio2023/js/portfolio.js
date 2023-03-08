"use strict";
const btnPfolio = document.querySelectorAll(".btn--pfolio");
const cardsPfolio = document.querySelectorAll(".card");
const btnAll = btnPfolio[0];
const btnPros = btnPfolio[1];
const btnPersos = btnPfolio[2];

function affTousProjets() {
    cardsPfolio.forEach(card => {
        card.classList.remove("card__hidden");
    });

}

function affProjetsPros() {
    cardsPfolio.forEach(card => {
        if (card.classList.contains("card__perso"))
            card.classList.add("card__hidden");
        if (card.classList.contains("card__pro"))
            card.classList.remove("card__hidden");

    });
}

function affProjetsPersos() {
    cardsPfolio.forEach(card => {

        if (card.classList.contains("card__pro"))
            card.classList.add("card__hidden");
        if (card.classList.contains("card__perso"))
            card.classList.remove("card__hidden");
    });
}

btnAll.addEventListener('click', affTousProjets);
btnPros.addEventListener('click', affProjetsPros);
btnPersos.addEventListener('click', affProjetsPersos);
