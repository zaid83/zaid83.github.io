/********* */
// Elements
/************* */


const viewer = document.querySelector('.viewer');
const buttons = document.querySelectorAll('.button');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');







/*************************************************************************************** */




//***********/
// Fonctions 
//***********/



// Insérer les valeurs sur l'écran

const insertValue = (value) => {
    if (value != "=" && value != "DEL" && value != "AC") {
        viewer.value += value;
    }

}

// Faire les operations avec la touche egale

const equal = () => {
    viewer.value = eval(viewer.value);
    
}

// Remettre à 0

const clear = () => {
    viewer.value = "";
}

// Supprime un chiffre avec DEL

const deleteValue = () => {
    let viewerValue = viewer.value;

    viewer.value = viewerValue.substring(0, viewerValue.length - 1);

}





/*************************************************************************************************** */



/*********** */
// Evenements
/************ */




equalBtn.addEventListener('click', equal);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteValue);



buttons.forEach((button) => {

    button.addEventListener('click', () => {
        insertValue(button.value);
    })
});

