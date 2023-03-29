const buttons = document.querySelectorAll('.btn');
const subCart = document.querySelectorAll('sub');

//ajout panier
nbArticlesPanier = 0;

function ajouterPanier() {
    nbArticlesPanier++;
    subCart.forEach(sub => {
        sub.innerHTML = nbArticlesPanier;
    })

}

buttons.forEach(button => {
    button.addEventListener("click", ajouterPanier);
});


//burger

const sidenav = document.getElementById("navigation__sidenav");
const openBtn = document.getElementById("navigation__openBtn");
const closeBtn = document.getElementById("sidenav__closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
} 