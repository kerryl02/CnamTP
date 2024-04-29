// const valeur_max = 50;

// function init_tableau(n){
//     let tab = [];

//     for(let i = 0; i < n; i++){
//         let valeur_alea = Math.ceil(Math.random() * (valeur_max));
//         tab.push(valeur_alea);
//     }

//     return tab;

// }

// function tableau_en_table(){
    
//     let tab = init_tableau(5);

//     str = "<table><tr>";

//     let div = document.getElementById("div1");

//     for (let i = 0; i < tab.length; i++)
//     {
//         str += "<td>" + tab[i] + "</td>";
//     }

//     str += "</tr></table>";

//     div.innerHTML = str;

// }
const valeur_max = 50;

function init_tableau(n){
    let tab = [];

    for(let i = 0; i < n; i++){
        let valeur_alea = Math.ceil(Math.random() * (valeur_max));
        tab.push(valeur_alea);
    }

    return tab;

}

function tableau_en_table(tab){

    str = "<table><tr>";

    let div = document.getElementById("div1");

    for (let i = 0; i < tab.length; i++)
    {
        str += "<td>" + tab[i] + "</td>";
    }

    str += "</tr></table>";

    div.innerHTML = str;

}

function table_en_tableau()
{
    let tab = document.querySelectorAll("td");
    let tab2 = [];

    tab.forEach(tab => {

        tab2.push(parseInt(tab.innerHTML));

    });

    console.log(tab2);
    
    return tab2;

}

function tri_insertion(tab){
    for (let i = 1; i < tab.length; i++)
    {
        let temp = tab[i];
        let j = i;

        while (i > 0 && tab[j - 1] > temp)
        {
            tab[j] = tab[j - 1];
            j--;
        }
        tab[j] = temp;
    }
    console.log(tab);
    tableau_en_table(tab);
}

function trier_tableau(){
    tri_insertion(table_en_tableau());
}

