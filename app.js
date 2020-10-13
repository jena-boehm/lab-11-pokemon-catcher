// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';

const radios = document.querySelectorAll('input');
const catchButton = document.querySelector('button');
const rightOrWrong = document.querySelector('#right-or-wrong');
const results = document.querySelector('#results');


// initialize state
const total = 0;
const captured = 0;

// set event listeners to update state and DOM