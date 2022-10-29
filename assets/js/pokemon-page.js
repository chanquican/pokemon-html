const body = document.body;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> pokemon</h1>

    <table class="table table-striped" id="tabla">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">altura</th>
                <th scope="col">peso</th>
                <th scope="col">tipo</th>
                <th scope="col">habilidad</th>
                <th scope="col">sprite frontal</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);
    //tbody = document.querySelector('tbody');

}





const crearFilaPokemon = (pokemon) => {
    let habilidades = '';
    pokemon.abilities.forEach(habilidad => {
        habilidades = habilidades + habilidad.name + ',';
    });
    let tipos = '';
    pokemon.types.forEach(tipo => {
        tipos = tipos + tipo.type + ',';
    });






    const html = `
        <td scope="col"> ${pokemon.id} </td>
        <td scope="col"> ${pokemon.name} </td>
        <td scope="col"> ${pokemon.height}</td>
        <td scope="col"> ${pokemon.weight}kg </td>
        <td scope="col"> ${tipos}</td>
        <td scope="col"> ${habilidades}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${pokemon.sprites}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    const table = document.getElementById("table-body");
    console.log(table);
    table.append(tr)

}
const siguientePagina = () => {
    const element = document.getElementById("tabla");
    element.remove();
}
const init = (pokemons) => {

    crearHtml();

    pokemons.forEach(pokemon => {
        console.log(pokemon);
        crearFilaPokemon(pokemon);
    });

}