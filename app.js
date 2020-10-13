// import functions and grab DOM elements
import { refreshPokemon, findById, seedAndGetPokemon } from './utils.js';
import { rawPokemonArray, rawPokemonData } from './pokemon-data.js';

const radios = document.querySelectorAll('input');
const catchButton = document.querySelector('button');
const results = document.querySelector('#results');
const images = document.querySelectorAll('label > img');


// initialize state
let totalRounds = 0;
// let pokemonCaptured = 0;
const resultsArray = [];

refreshPokemon(resultsArray);

// let optionOne, optionTwo, optionThree = 0;


// Increment total rounds and refresh random pokemon on click. If number of rounds reaches 10, redirect to the results page.
catchButton.addEventListener('click', () => {
    console.log(resultsArray);
    const captured = document.querySelector(':checked').value;
    let pokemon = findById(resultsArray, Number(captured));
    pokemon.captured++;
    // pokemon.encountered++;
    totalRounds++;
    refreshPokemon(resultsArray);

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

// pokemonCart.push (
//     {
//         name: optionOne.name,
//         encountered: 0,
//         captured: captured.value,
//     },
//     {
//         name: optionTwo.name,
//         encountered: 0,
//         captured: captured.value,
//     },
//     {
//         name: optionThree.name,
//         encountered: 0,
//         captured: captured.value,
//     }
// );



            // const pokemonCaptured = e.target.value;
            // let pokemonInCart = findById(pokemon, 
            //     Number(pokemonCaptured.id));
            // debugger
        // });



        // for (let i = 0;i < radios.length;i++) {
        //     images[i].style.opacity = .7;
        // }



        // const localStoragePokemon = seedAndGetPokemon();
        // for (let i = 0; i < localStoragePokemon.length; i++) {
        //     const pokemon = localStoragePokemon[i];

        // }

    // });



