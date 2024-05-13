'use strict';
//init the variables
//button
const formCalculator = document.getElementById('calculator-form');
const buttonReset = document.getElementById('reset');
//user input
const age = document.getElementById('age');
const km = document.getElementById('km');

//constant output
const discountElement = document.getElementById('discount');

//form submit listener
formCalculator.addEventListener('submit', function (event) {
    event.preventDefault();

    //declaration of variables
    const age = document.getElementById('age');
    const km = document.getElementById('km');

    //constants
    const pricexkm = 0.21;
    const youngDiscount = 20;
    const seniorDiscount = 40;

    //calculation
    let grossPrice = km.value * pricexkm;
    let finalPrice = grossPrice;

    //check if the passenger is young or senior
    if (age.value < 18) {
        finalPrice = grossPrice - (grossPrice * youngDiscount) / 100;
    } else if (age.value > 65) {
        finalPrice = grossPrice - (grossPrice * seniorDiscount) / 100;
    }

    //inject gross price and pricexkm into the DOM
    document.getElementById("pricexkm").innerHTML = `Il prezzo a chilometro è € ${pricexkm}`;
    document.getElementById("grossprice").innerHTML = `Il prezzo senza sconto è €  ${grossPrice.toFixed(2)}`;

    //inject discount into the DOM
    let discountText = `Non si ha diritto a nessuno sconto!`;
    if (age.value < 18) {
        discountText = `Lo sconto applicato è ${youngDiscount} %`;
    } else if (age.value > 65) {
        discountText = `Lo sconto applicato è ${seniorDiscount} %`;
    }
    discountElement.innerHTML = discountText;

    //inject final price into the DOM
    document.getElementById("price").innerHTML = `Il prezzo finale è € ${finalPrice.toFixed(2)}`;
});

//reset button
buttonReset.addEventListener('click', function (event) {
    event.preventDefault();

    //default values
    age.value = '';
    km.value = '';
    document.getElementById("discount").innerText = ``;
    document.getElementById("pricexkm").innerText = ``;
    document.getElementById("grossprice").innerText = ``;
    document.getElementById("price").innerText = ``;
});