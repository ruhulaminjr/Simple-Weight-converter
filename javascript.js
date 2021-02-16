let show = document.getElementById('output');
show.style.visibility = 'hidden';
let poundsid =document.getElementById('lbsinput');
poundsid.addEventListener('input',calculate);
let grams =document.getElementById('gramsoutput');
let killo = document.getElementById('killoutput');
let ounce = document.getElementById('ounceoutput');
function calculate(e){
    show.style.visibility = 'visible';
    let pounds = e.target.value;
    grams.innerHTML = pounds / 0.0022046;
    killo.innerHTML = pounds / 2.2046;
    ounce.innerHTML = pounds*16;
}