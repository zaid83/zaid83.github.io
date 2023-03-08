"use_strict";
const heroTitle = document.querySelector('.hero__title');
const heroTitleContent = document.querySelector('.hero__title').textContent;
const arrTitle = [...heroTitleContent];
const letters = document.querySelectorAll('.letters');
console.log(letters);

letters.forEach(letter => {
    letter.addEventListener('mouseover', function () {
        letter.style.color = "#ff7a00";
    });
    letter.addEventListener('mouseout', function () {
        letter.style.color = "white";
    });
});




