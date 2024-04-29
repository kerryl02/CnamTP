function afficher_premiers(){

    let nbr = document.getElementById("in1").value;

    for (let i = 2; i < nbr; i++)
    {
        if (nbr % i === 0 || nbr % 1)
        {
           console.log(i + "est pas un nombre premier"); 
        } else
        {
            console.log(i + "est un nombre premier"); 
        }
    }
}