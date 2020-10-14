import { rawPokemonData } from './pokemon-data.js';

const radios = document.querySelectorAll('input');
const catchButton = document.querySelector('button');
const rightOrWrong = document.querySelector('#right-or-wrong');
const results = document.querySelector('#results');
const images = document.querySelectorAll('label > img');


export function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}


export function refreshPokemon(resultsArray) {
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
    
    
    radios[0].value = optionOne.id;
    images[0].src = optionOne.url_image;
    
    radios[1].value = optionTwo.id;
    images[1].src = optionTwo.url_image;
    
    radios[2].value = optionThree.id;
    images[2].src = optionThree.url_image;

    for (let i = 0; i < radios.length; i++) {
        // radios[i].addEventListener('change', (e) => {
        const radio = radios[i];
            // radios.forEach((radio) => {
        let pokemon = findById(resultsArray, Number(radio.value)); 
    
        if (!pokemon) {
            const newPokemon = findById(rawPokemonData, Number(radio.value));
    
            pokemon = {
                name: newPokemon.pokemon,
                id: Number(radio.value),
                encountered: 1,
                captured: 0
            };
            resultsArray.push(pokemon);
        } else {
            pokemon.encountered++;
        }
    }
}


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i]; 
        if (item.id === someId) {
            return item;
        }
    }
}

export function setInLocalStorage(key, value) {
    const stringItem = JSON.stringify(value);
    
    localStorage.setItem(key, stringItem);
    return value; 
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}