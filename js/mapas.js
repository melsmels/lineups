const ls = localStorage.getItem('mapa')
let mapas = [];


const fetchApio = async () =>{
    const ruta = "https://github.com/melsmels/lineups/blob/main/mapas/${ls}.json"
    await fetch(ruta)
    .then( response => response.json())
    .then(data => mapas = data)


}

console.log(mapas);
fetchApio();
