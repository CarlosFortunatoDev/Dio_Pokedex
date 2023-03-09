


const offset = 0;
const limit = 10;

// URL API POKEDEX
const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit;


function convertPokemonToLi(pokemon) {
    return '<li class="pokemon"> <span class="number">#001</span> <span class="name">'+pokemon.name+'</span> <div class="detail"> <ol class="types"> <li class="type">grass</li> <li class="type">poison</li> </ol> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="'+pokemon.name+'"> </div> </li>'
}

console.log(document.getElementById('pokemonList'))









// Processamento assíncrono
// A response vai para o primeiro then
// fetch(url)

//     // Tranformar body em json
//     .then((response) => response.json())

//     // Pegar results, que é a lista de pokemon
//     .then(jsonBody => jsonBody.results)

//     // Imprimir o jason
//     .then((pokemonList) => {
        
//         for (let i = 0; i < pokemonList.length; i++) {
//             const pokemon = pokemonList[i]
//             console.log(convertPokemonToLi(pokemon))
//         }

//         document.getElementsByClassName('pokemons')

//     })

//     // Verificar se há erros
//     .catch ((error) => console.log(error))

//     // Executar quando terminar
//     // .finally (function(){
//     //     console.log('Requisição concluída!')
//     // })



