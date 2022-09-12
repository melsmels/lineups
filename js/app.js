document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("ascent").addEventListener("click", function() {
        localStorage.setItem("mapa", 101);
        window.location = "mapas.html"
    });
    document.getElementById("perl").addEventListener("click", function() {
        localStorage.setItem("mapa", 102);
        window.location = "mapas.html"
    });
    document.getElementById("fracture").addEventListener("click", function() {
        localStorage.setItem("mapa", 103);
        window.location = "mapas.html"
    });
    document.getElementById("breeze").addEventListener("click", function() {
        localStorage.setItem("mapa", 104);
        window.location = "mapas.html"
    });
    document.getElementById("icebox").addEventListener("click", function() {
        localStorage.setItem("mapa", 105);
        window.location = "mapas.html"
    });
    document.getElementById("bind").addEventListener("click", function() {
        localStorage.setItem("mapa", 106);
        window.location = "mapas.html"
    });
    document.getElementById("haven").addEventListener("click", function() {
        localStorage.setItem("mapa", 107);
        window.location = "mapas.html"
    });

});