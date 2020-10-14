import { rawPokemonData } from '../pokemon-data.js';
import { getFromLocalStorage } from '../utils.js';


export function renderTable() {
    const table = document.querySelector('tbody');
    const pokemonResults = getFromLocalStorage('POKEMON') || [];
    for (let i = 0; i < pokemonResults.length; i++) {
        const result = pokemonResults[i];
        const tr = renderLineItems(result);
        table.append(tr);
    }
}

renderTable();

function renderLineItems(pokemon) {

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const captured = document.createElement('td');
    const encountered = document.createElement('td');

    captured.textContent = pokemon.captured;
    encountered.textContent = pokemon.encountered;

    // const pokemonData = findById(array, id.id);

    tdName.textContent = pokemon.name;

    tr.append(tdName, captured, encountered);

    return tr;
}


const resultsArray = getFromLocalStorage('POKEMON');

const pokemon = resultsArray.map((item) => {
    return item.name;
});

const encounteredPoke = resultsArray.map((item) => {
    return item.encountered;
});


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: pokemon,
        datasets: [
            // {
            //     label: 'Times Caught',
            //     backgroundColor: 'rgb(255, 99, 132)',
            //     borderColor: 'rgb(255, 99, 132)',
            //     data: capturedPoke,
            // },
            { label: 'Times Encountered',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: encounteredPoke,
            }
        ]
    },

    // Configuration options go here
    options: {}
});


