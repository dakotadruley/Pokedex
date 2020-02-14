const pokeAPI = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function getPokes() {
    let qString = window.location.hash.slice(1);
    const url = `${pokeAPI}?${qString}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
