// import functions and grab DOM elements
import { refreshPokemon } from './utils.js';

const radios = document.querySelectorAll('input');
const catchButton = document.querySelector('button');
const rightOrWrong = document.querySelector('#right-or-wrong');
const results = document.querySelector('#results');
const images = document.querySelectorAll('label > img');

// initialize state
let totalRounds = 0;
let pokemonCaptured = 0;
let pokemonCapturedArray = 0;
let pokemonEncountered = 0;
let pokemonEncounteredArray = [];


// set event listeners to update state and DOM

catchButton.addEventListener('click', () => {
    totalRounds++;
    pokemonEncountered++;
    refreshPokemon();

    if (totalRounds === 10) {
        location.href = './results';
    }
});

refreshPokemon();