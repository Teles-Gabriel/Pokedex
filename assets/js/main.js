const offset = 0;
const limit = 12;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)}


function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
                <span class='number'>#${pokemon.order}</span>
                <span class='name'>${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}" 
                    alt="${pokemon.name}">
                </div>
            </li>
`
}

const pokemonList = document.getElementById('pokemonList')

PokeApi.getPokemons().then((pokemons = []) => {
    
    //const novaLista = pokemons.map((pokemon) => convertPokemonToLi(pokemon))  //usando arrow function não é necessário usar apenas 1 return

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    //const newHtml = novaLista.join('')
    //pokemonList.innerHTML += newHtml
     
    
    // const listaItens = [];

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listaItens.push(convertPokemonToLi(pokemon))
    // }

    // console.log(listaItens)



})