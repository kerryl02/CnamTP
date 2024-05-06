
// CONSTANTES
// NE PAS TOUCHER !!!
let nb_click_td;

const nb_points = new Map([
	[6, 10000],
	[7, 36],
	[8, 720],
	[9, 360],
	[10, 80],
	[11, 252],
	[12, 108],
	[13, 72],
	[14, 54],
	[15, 180],
	[16, 72],
	[17, 180],
	[18, 119],
	[20, 306],
	[21, 1080],
	[22, 144],
	[23, 1800],
	[24, 3600],
]);

// fonctions fournies
// NE PAS MODIFIER !!!!

function valeurs_tableau() {
	let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let resultat = [];

	for (let i=0; i < 9; i++) {
		let nb_alea = Math.ceil(Math.random() * (tab.length - 1));
		resultat.push(tab.splice(nb_alea, 1));
	}

	return resultat;
}


function x_cases_hasard(x) {
	let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let resultat = [];

	for (let i=0; i < x; i++) {
		let nb_alea = Math.ceil(Math.random() * (tab.length - 1));
		resultat.push(tab.splice(nb_alea, 1) - 1);
	}

	return resultat;
}


function init_page() {
	nb_click_td = 0;
	let tab = valeurs_tableau();

	document.getElementById("coups-restants").innerHTML = "Nombre de coups restants : 3";
	afficher_nb_points();

	remplir_table(tab);

	Array.from(document.getElementsByTagName("th")).forEach((element) => {
		element.addEventListener("click", th_click_event);
	});

	cacher_afficher_cases(x_cases_hasard(1));

	let bouton_rejouer = document.getElementById("bouton-rejouer");

	bouton_rejouer.addEventListener("click", click_bouton_rejouer);
}


function afficher_nb_points() {
	let str = "<ul>";
	nb_points.forEach((key, value) => {
		str += `<li>${value}: ${key}\n</li>`;
	});

	document.getElementById("nb-points").innerHTML = str + "</ul>";
}


/* FONCTIONS A REMPLIR */

// QUESTION 1
function remplir_table(tab) {
	let list = document.getElementsByTagName("td");

	for (let i = 0; i < 9; i++) {
		list[i].innerHTML=tab[i];
	}
	return;
}


// QUESTION 3
function ids_correspondants(id) {
	let res = [];
	switch (id) {
		// row
		case "l1":
			for (let i = 1; i <= 3; i++) {
				res.push(id[1] + i); 
			}
			break;
		case "l2":
			for (let i = 1; i <= 3; i++) {
				res.push(id[1] + i); 
			}
			break;
		case "l3":
			for (let i = 1; i <= 3; i++) {
				res.push(id[1] + i); 
			}
			break;
		// col
		case "c1":
			for (let i = 1; i <= 3; i++) {
				res.push(i + id[1]); 
			}
			break;
		case "c2":
			for (let i = 1; i <= 3; i++) {
				res.push(i + id[1]); 
			}
			break;
		case "c3":
			for (let i = 1; i <= 3; i++) {
				res.push(i + id[1]); 
			}
			break;
		// diago
		case "d1":
			res = ["11","22","33"];
			break;
		case "d2":
			res = ["13","22","31"];
			break;
			
		} 
		return res;
	}
	
	
	// QUESTION 4
	function somme_cases(id_cases) {
	let res = 0;
	for (let i = 0; i < id_cases.length; i++) { 
		let td = document.getElementById(id_cases[i]);
		let valeur = parseInt(td.innerHTML);
		res += valeur;
	}
	return res;
}


// QUESTION 5
function afficher_cases(id_cases) {
	for (let i = 0; i < id_cases.length; i++) {
		let td = document.getElementById(id_cases[i]);
		td.style.backgroundColor = "gray";
		td.style.color = "black";
	}
}


// QUESTION 6
function th_click_event(event) {
	console.log("CLICK TH");
	let id = event.currentTarget.id;
	afficher_cases(ids_correspondants(id));
	console.log(somme_cases(ids_correspondants(id)));
}

// QUESTION 7
function decrementer_coups_restants() {
	let td = document.getElementsByTagName("td");

	let count = 3;
	if (count == 0)
		{
			document.getElementById("coups-restants").innerHTML = "Plus de coups restants. Cliquez sur une flèche.";
		} else
		{
			nb_click_td++;
			document.getElementById("coups-restants").innerHTML = "Nombre de coups restants : " + count;
			count--;
		}

}


// QUESTION 8
function cacher_afficher_cases(cases_affichees) {
	let td = document.getElementsByTagName(td);

	for (let i = 0; i < td.length; i++)
	{
		let value = td[i].innerHTML;
		for (let u = 0; u < cases_affichees.length; i++)
		{
			if (value != cases_affichees)
			{
				value.style.display
			}
		}
	}
}


// QUESTION 9
function afficher_td(event) {
	console.log("CLICK TD");
}


// QUESTION 10
function finir_jeu(somme) {
	let str = `La somme vaut ${somme}. Points gagnés : ${nb_points.get(somme)}`;

}


// QUESTION 11
function click_bouton_rejouer() {
	console.log("CLICK BOUTON REJOUER")
}

























