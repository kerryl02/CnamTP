function bouger() {
    let button = document.getElementById("bouton");
    let largeur = Math.ceil(Math.random()*(window.innerWidth));
    let hauteur = Math.ceil(Math.random()*(window.innerHeight)); 

    document.getElementById("bouton").style.position = "absolute";
    document.getElementById("bouton").style.top = hauteur + "px";
    document.getElementById("bouton").style.left = hauteur + "px";

}