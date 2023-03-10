
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default 

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {  
    return fetch(pokemon.url) /* Pegou url do pokemon*/
        .then((response) => response.json()) /*Devolveu em detalhe do pokemon em json */
        .then(convertPokeApiDetailToPokemon)
}

// Consumo de Api e tratamento http
pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch (url)
        .then((response) => response.json()) /*Conversão lista de pokemons para Json*/
        .then((jsonBody) => jsonBody.results) /*Pegou o resultado da lista que estava dentro do Json*/
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) /* Mapeando lista de pokemons em um lista de requisições dos detalhes dos pokemons */
        .then((detailRequeste) => Promise.all(detailRequeste)) /* Esperamos as requisições dos detalhes, e quanto terminar converter para Json*/
        .then((pokemonDetails) => pokemonDetails)  /*Pegou o resultado da lista de detalhes que estava dentro do Json*/
}

