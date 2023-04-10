//const offset = 0;
//const limit = 151;
//const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 10;
let offset = 0;



function loadMoreItens(offset, limit){


    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => {
            return `<li class="pokemon ${pokemon.type}">
                <span class='number'>#${pokemon.number}</span>
                <span class='name'>${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                </div>
                </li>
    `
        }).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadMoreItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadMoreItens(offset, limit)
})

//PokeApi.getPokemons().then((pokemons = []) => {
    
    //const novaLista = pokemons.map((pokemon) => convertPokemonToLi(pokemon))  //usando arrow function não é necessário usar apenas 1 return

//    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    //const newHtml = novaLista.join('')
    //pokemonList.innerHTML += newHtml
     
    
    // const listaItens = [];

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listaItens.push(convertPokemonToLi(pokemon))
    // }

    // console.log(listaItens)