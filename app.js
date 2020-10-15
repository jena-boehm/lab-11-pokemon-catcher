// import functions and grab DOM elements
import { refreshPokemon, findById, setInLocalStorage } from './utils.js';

const radios = document.querySelectorAll('input');
const catchButton = document.querySelector('button');
const results = document.querySelector('#results');
const images = document.querySelectorAll('label > img');
const pokeballCount = document.querySelector('#pokeball-count');
export const POKEMON = 'POKEMON';


// initialize state
let totalRounds = 0;
let totalPokeballs = 10;
const resultsArray = [];
refreshPokemon(resultsArray);


pokeballCount.textContent = `You have ${totalPokeballs} Pokeballs left.`;


catchButton.addEventListener('click', () => {
    const captured = document.querySelector(':checked').value;
    let pokemon = findById(resultsArray, Number(captured));
    pokemon.captured++;
    totalRounds++;
    totalPokeballs--;
    refreshPokemon(resultsArray);

    pokeballCount.textContent = `You have ${totalPokeballs} Pokeballs left.`;

    // results.classList.toggle('hidden');

    for (let i = 0;i < radios.length;i++) {
        images[i].style.opacity = 1;

        // reset radio button
    }

    if (totalRounds === 10) {

        setInLocalStorage(POKEMON, resultsArray);
        window.location.href = './results';
    }
});

