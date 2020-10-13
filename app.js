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

// Increment total rounds and refresh random pokemon on click. If number of rounds reaches 10, redirect to the results page.
catchButton.addEventListener('click', () => {
    totalRounds++;
    refreshPokemon();

    results.classList.toggle('hidden');

    for (let i = 0;i < radios.length;i++) {
        images[i].style.opacity = 1;

        // reset radio button
    }

    if (totalRounds === 10) {
        location.href = './results';
    }
});

// Refresh random pokemon when page loads
refreshPokemon();


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        pokemonCaptured++;
        pokemonEncountered++; 

        for (let i = 0;i < radios.length;i++) {
            images[i].style.opacity = .7;
        }
    });
}