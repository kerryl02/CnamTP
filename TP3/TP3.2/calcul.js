function calculer() {
    let nbr1 = document.getElementById("chiffre1").value;
    let nbr2 = document.getElementById("chiffre2").value;

    nbr1 = parseInt(nbr1);
    nbr2 = parseInt(nbr2);

    let div = document.getElementById("result");
    div.innerHTML = nbr1 + nbr2;
}