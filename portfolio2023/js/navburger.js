let menu = document.querySelector(".navigation__burger");
let spanTop = document.querySelector("#top");
let spanMiddle = document.querySelector("#middle");
let spanBottom = document.querySelector("#bottom");
let modal = document.querySelector(".side-navigation__links-box");
let links = document.querySelectorAll(".side-navigation__links");


links.forEach(link => {
    link.addEventListener('click', function () {
        spanMiddle.style.display = "block";
        spanBottom.style.marginTop = "4px";
        spanBottom.style.transform = "rotate(0deg)";
        spanTop.style.transform = "rotate(0deg)";
        menu.classList.remove("open");
        modal.classList.add('hidden');
    })

});

menu.addEventListener("click", menuburger);


function menuburger() {

    if (menu.classList[1] != "open") {

        menu.classList.add("open");
        spanMiddle.style.display = "none";
        spanBottom.style.marginTop = "-4px";
        spanBottom.style.transform = "rotate(45deg)";
        spanTop.style.transform = "rotate(-45deg)";
        modal.classList.remove('hidden');

    } else {
        spanMiddle.style.display = "block";
        spanBottom.style.marginTop = "4px";
        spanBottom.style.transform = "rotate(0deg)";
        spanTop.style.transform = "rotate(0deg)";
        menu.classList.remove("open");
        modal.classList.add('hidden');
    }


}