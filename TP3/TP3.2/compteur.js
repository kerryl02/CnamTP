function compter_mots() {
    let str = document.getElementById("text");
    str = str.value;
    let count = 0;

    for (let i = 0; i < contenu.length; i++)
    {
        if (str[i] == " ")
        {
            count++;
            console.log("yes");
        }
    }

    document.getElementById("div1").innerHTML = "il y a " + count + " mots";
}