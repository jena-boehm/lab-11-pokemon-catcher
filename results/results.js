import { rawPokemonData } from '../pokemon-data.js';
import { getFromLocalStorage, mungeData } from '../utils.js';

const resultsArray = getFromLocalStorage('POKEMON');
const encounteredData = mungeData(resultsArray, 'encountered');
const capturedData = mungeData(resultsArray, 'captured');
const playAgainButton = document.querySelector('button');


// RESULTS TABLE

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




// CHART

const pokemon = resultsArray.map((item) => {
    return item.name;
});


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: pokemon,
        datasets: [
            {
                label: 'Times Caught',
                backgroundColor: 'rgb(204, 0, 0)',
                borderColor: 'rgb(59, 76, 202)',
                data: capturedData,
            },
            { label: 'Times Encountered',
                backgroundColor: 'rgb(255, 222, 0)',
                borderColor: 'rgb(59, 76, 202)',
                data: encounteredData,
            }
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30
            }
        }
    }
});


// PLAY AGAIN BUTTON
playAgainButton.addEventListener('click', () => {
    window.location.href = '../';
});