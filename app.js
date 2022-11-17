'use strict';

function strikeThrough(item, strike){
    let checkBox = document.getElementById(item);
    let ingredient = document.getElementById(strike);
    let temp = ingredient.textContent;
    ingredient.innerHTML ='';
    if (checkBox.checked){
        let strikeTh = document.createElement('s');
        strikeTh.textContent = temp;
        ingredient.appendChild(strikeTh);
    } else {
        ingredient.textContent = temp;
    }
}