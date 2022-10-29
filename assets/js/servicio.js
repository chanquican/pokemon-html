const buscarPokemonPorPagina = async(noPagina) => {
    console.log(noPagina);
    let pokemons = await fetch(`http://localhost:3000/pokemons/getAll?page=${noPagina}`);
    pokemons = await pokemons.json();
    console.log(pokemons);
    init(pokemons);
    return pokemons;
}


//let pokemones = await buscarPokemonPorPagina(1);

buscarPokemonPorPagina(50);