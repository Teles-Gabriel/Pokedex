const PokeApi = {
}

PokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response)=> response.json())
}

PokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())  //=> substitui a function, função sem contexto declarado 
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((PokeApi.getPokemonDetail)))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

