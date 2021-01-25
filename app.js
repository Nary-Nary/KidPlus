
var saisie = "";
var btn = document.querySelector('input');

function showValue(btn){
    saisie = saisie + btn.value;
    
    document.getElementById('output').innerHTML = saisie;
};

function calcul(){

    document.getElementById('output').innerHTML = eval(saisie);
};

function effacer(){

    document.getElementById('output').innerHTML = "0"
    saisie = "";
};

