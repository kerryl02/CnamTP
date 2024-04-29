function init_tableau(n){
    let tab = [];

    for(let i = 0; i < n; i++){
        let valeur_alea = Math.ceil(Math.random() * (50));
        tab.push(valeur_alea);
    }

    return tab;

}