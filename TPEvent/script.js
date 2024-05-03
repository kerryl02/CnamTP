function init_page() {
    //  Question 1 // Au chargement de ma page 

    // Cette ligne veut dire que je prend le 1er element avec le selecteur body
    let body = document.getElementsByTagName("body")[0];

    // Question 7 // Crée une liste de type Numéroté ou Non Aleatoirement 
    // J'initialise a 2 parce que si boolean 0/1 
    // la combinaison de math.ceil(math.random) a de tres faible possibilité de tomber sur 0 
    let taille_max = 2;
    let boolean = Math.ceil(Math.random()*(taille_max));
    console.log(boolean);
    let type = boolean == 1 ? "ul" : "ol";
    let list = document.createElement(type);
    let list2 = document.createElement(type);
    body.appendChild(list);
    body.appendChild(list2);

    let button = document.getElementById("bouton");

    // Question 6 //
    //ajout d'un bouton
    let button_remove = document.createElement("button");
    button_remove.id = "remove";
    button_remove.innerHTML = "remove all";

    body.appendChild(button_remove);

    // Question 6 //je parcoure la taille de la liste et je supprime les enfant
    button_remove.onclick = () => {
        let list_li = list.childNodes.length;

        for (let i = 0; i < list_li; i++){
            list.removeChild(list.lastChild);
        }
    }
    // Question 2
    bouton.onclick = () => {
        
        // je prend la valeur de l'input text
        let text = document.getElementById("item").value;

        //Question 5 // Verifie si la valeur est vide 
        if (text == "")
        {
            let newDiv = document.createElement("div");
            newDiv.id = 'div1';
            body.appendChild(newDiv);

            let div = document.getElementById("div1");
            div.innerHTML = "Attention : vous avez entré du texte vide, il n'a pas été ajouté à la liste";

        } else
        {
            let div = document.getElementById("div1");
            if(div)
                body.removeChild(div);
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(text));
            list.appendChild(li);

            // Question 3
            li.onclick = () => {

                // Cette ligne c'est un condition ternaire 
                // quand on reclique verifie si le li est décoré si oui il enleve la decoration
                li.style.textDecoration = li.style.textDecoration ? "" : "line-through";
            };

            // Question 4 // ondblclick c'est quand on double clique
            li.ondblclick = () => {
                // Question 10

                // removeChild retourne son élément quand on le supprime 
                // et la je l'ai récupéré
                let li_fait = list.removeChild(li);

                // je l'ai ajouter a une autre liste
                list2.appendChild(li_fait);
            };

            // Question 8
            li.onmouseover = () => {
                li.style.color = "pink";
            }
            li.onmouseout = () => {
                li.style.color = ""
            }
            
        }
    }

}