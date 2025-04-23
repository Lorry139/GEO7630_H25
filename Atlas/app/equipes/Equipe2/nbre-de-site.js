function generateNbre_de_site() {
 
 
    map.addSource('RANL13299903.Nbre_de_site-source', {
        'type': 'vector',
        'tiles': [ "https://silver-spoon-5grrgx7x9qxjhpprj-8801.app.github.dev/RANL13299903.Nbre_de_site/{z}/{x}/{y}.pbf"]

    });
    map.addLayer({
        'id': 'Nbre_de_site',
        'type': 'fill',
        'source': 'RANL13299903.Nbre_de_site-source',
        'source-layer': 'RANL13299903.Nbre_de_site',

        'paint': {
            "fill-color": "rgb(48, 91, 102)",
            "fill-opacity": 1,
            "fill-width": 1,
            "fill-translate-anchor": "map"
        }
    });
};

// Ajouter un événement de clic sur le bouton "loadLayer" 

// pour charger la couche de points aléatoires

//document

   // .getElementById('nbre de site') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 

   // .addEventListener('click', nbre de site);
 
    
 
   const Nbre_de_site = document.querySelector('#Nbre_de_siteCheckbox'); // Ajout d'une constante nbredesite pour l'action checkbox
 
   Nbredesite.addEventListener('change', (event) => { // Ecoute de l'evenement change pour la checkbox

       if(event.target.checked) { // Si l'action checking est faite, afficher les nombres de sites, 

        Nbre_de_site()

       }

       else  {//sinon, retirer-les


  // Supprimer la couche de la carte

  map.removeLayer('RANL13299903.Nbre_de_site');

       }

   });
