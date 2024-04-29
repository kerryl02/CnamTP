
function creer_table() {

    let str = "<table>" + "<tbody>";

    for(let i = 0; i <= 10; i++) {
        let res = 2 * i;
        str += "<tr><td>" + 2 + " x " + i + "</td><td>" + res + "</td></tr>";
    }

    str += "</tbody>" + "</table>";

    document.getElementById("contenu").innerHTML = str;
    
    let td = document.querySelectorAll('td');

}

function donner_style() {
    let td = document.querySelectorAll('td');
    td.forEach(td => {
        td.style.border = "solid 1px";
    });
    ;
}