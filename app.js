// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';

const radios = document.querySelectorAll('input');
const catchButton = document.querySelector('button');
const rightOrWrong = document.querySelector('#right-or-wrong');
const results = document.querySelector('#results');
const images = document.querySelectorAll('label > img');

// initialize state
let totalRounds = 0;
let pokemonCaptured = 0;


function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}

let optionOne = getRandomPokemon(rawPokemonData);
let optionTwo = getRandomPokemon(rawPokemonData);
let optionThree = getRandomPokemon(rawPokemonData);

while (optionOne.id === optionTwo.id) {
    optionOne = getRandomPokemon(rawPokemonData);
}
while (optionTwo.id === optionThree.id) {
    optionTwo = getRandomPokemon(rawPokemonData);
}
while (optionThree.id === optionOne.id) {
    optionThree = getRandomPokemon(rawPokemonData);
}

console.log(optionOne, optionTwo, optionThree);

radios[0].value = optionOne.id;
images[0].src = optionOne.url_image;

radios[1].value = optionTwo.id;
images[1].src = optionTwo.url_image;

radios[2].value = optionThree.id;
images[2].src = optionThree.url_image;

// set event listeners to update state and DOM