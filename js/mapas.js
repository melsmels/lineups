const ls = localStorage.getItem('mapa')
let mapas = [];


const fetchApio = async () =>{
    const ruta = "../mapas/101.json"
    await fetch(ruta)
    .then( response => response.json())
    .then(data => mapas = data)


}
const data = require("../mapas/101.json")

console.log(data);
fetchApio();
