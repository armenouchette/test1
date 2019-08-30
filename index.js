document.addEventListener("DOMContentLoaded",()=>{

	// Construction tableau citations
		let tabCitations = {Pessimiste	:{	debut:["Les cons", "Les imbéciles", "Les idiots"],
											milieu:["gagnent toujours,", "sont comme les feux tricolores,", ", il y en aura toujours,"],
	                        				fin:["ils sont trops", "tu les trouveras à chaque coin de rues","ils ne sont pas menacés d'extinction"]
										},
							Optimiste	:{	debut:["Rire","Sourire","L'amour"],
											milieu:["est","pourrait être","c'est"],
	                        				fin:["une signature qui n'est qu'une portion de reflet d'ADN relevant de chaque individu","ce qui rend inutile tout médicament","la langue universelle de la bonté", "une clef secrète qui ouvre bien des coeurs","un mensonge universel (oups c'est pas très optimiste ça !)"]
										},
              };

	// Affichage des boutons : 5 boutons dans le div "boutons"
		let nombreBouton = 5; 
		let classBouton = document.getElementsByClassName("boutons")[0]; 
		let classBoutonQuitter = document.getElementsByClassName("boutonQuitter")[0];

	// Définition de la fonction "aleatoire"

		function aleatoire(array) {
			return array[Math.floor(Math.random() * array.length)];
		}

	//Fonction qui permet de générer les phrases aléatoirement 

		function genererCitation(typeCitation,nombreCitation) { 
				supprimerTexte() 
				for (let i=0; i < nombreCitation; i++){ 
					document.getElementsByClassName('citation')[0].innerHTML += aleatoire(typeCitation.debut) + " " + aleatoire(typeCitation.milieu) + " " + aleatoire(typeCitation.fin) + "<br/>"; 
					}
			}	
	//Réinitialisation des boutons

		function supprimerBouton(){
			while (classBouton.firstChild){ 
				classBouton.removeChild(classBouton.firstChild);
			}
			while (classBoutonQuitter.firstChild){ 
				classBoutonQuitter.removeChild(classBoutonQuitter.firstChild); 
			}
		}
	
	// Reinitialisation du texte des citations

		function supprimerTexte(){
			document.getElementsByClassName('citation')[0].textContent = "";
		}

	// Réinitilisation du texte du h1

		function initialiserH1(){
			document.getElementsByClassName('h1')[0].textContent = "Générateur de citations";
		}

	// Réinitialisation du texte de l'accroche

		function initialiserAccroche(){
				document.getElementsByClassName('accroche')[0].textContent = "Quelle est votre humeur du jour ?";
			}
	

	// Remplacement du texte de l'H1 (lorsque l'utilisateur aura choisi un thème de citation)

		function remplacerH1(typeCitation){
			document.getElementsByClassName('h1')[0].textContent = "Vous êtes" + " " + typeCitation + " !";
		}

	// Création du bouton retour et de sa fonction
		
		function creerBoutonRetour(){
			let boutonRetour = document.createElement("button"); 
			boutonRetour.innerHTML = "Retour";
			boutonRetour.id = "boutonRetour";
			classBouton.appendChild(boutonRetour);
			document.getElementById(boutonRetour.id).addEventListener ("click", ()=>{pageAccueil();});
		}

	// Création du bouton quitter et de sa fonction

		function creerBoutonQuitter(){
			let boutonQuitter = document.createElement("button");
				boutonQuitter.innerHTML = "Quitter"; 
				boutonQuitter.id = "boutonQuitter"; 
				classBoutonQuitter.appendChild(boutonQuitter);
				document.getElementById(boutonQuitter.id).addEventListener ("click", ()=>{pageQuitter();});
		}

	// Fonction de la page quitter

		function pageQuitter(){
			supprimerBouton(); 
			supprimerTexte(); 
			initialiserH1(); 
			document.getElementsByClassName('accroche')[0].textContent = "Merci, à bientôt !"; 
			}


	// Fonction génération des boutons de la page d'accueil ( = bouton "Optimiste" et bouton "Pessimiste")

		function pageAccueil(){
			supprimerBouton(); 
			supprimerTexte();
			initialiserH1();
			initialiserAccroche(); 
			creerBoutonQuitter();
			for (let typeCitation in tabCitations){ 
				let boutonAccueil = document.createElement("button");
				boutonAccueil.innerHTML = typeCitation; 
				boutonAccueil.id = "bouton"+typeCitation; 
				classBouton.appendChild(boutonAccueil); 
				document.getElementById("bouton"+typeCitation).addEventListener ("click", ()=>{genererBoutonsCitations(typeCitation);});
			}
		}

	// Fonction de génération de citations (différents choix de l'utilisateur concernant le nombre de citations qu'il souhaite)

		function genererBoutonsCitations(typeCitation){ 
			supprimerBouton();
			remplacerH1(typeCitation);
			for (let i=0; i < nombreBouton; i++){ 
						let boutonCitations = document.createElement("button"); 
						boutonCitations.innerHTML = i+1+" !"; 
						boutonCitations.id = "bouton"+typeCitation+(i+1); 
						classBouton.appendChild(boutonCitations); 
						document.getElementsByClassName('accroche')[0].textContent = "Combien de citations voulez-vous ?";
						document.getElementById(boutonCitations.id).addEventListener ("click", ()=>{genererCitation(tabCitations[typeCitation],(i+1));});
			}
			creerBoutonRetour();
			creerBoutonQuitter();
		}

	// Page d'ouverture du programme

		pageAccueil(); 
});
