function dessiner_etoiles() {

    let div = document.getElementById("d1")

    for(let i = 0; i < 10; i++)
    {
        for(let u = -1; u < i; u++)
        {
            div.innerHTML += "*";
        }
        div.innerHTML += "<br>";
    }
}