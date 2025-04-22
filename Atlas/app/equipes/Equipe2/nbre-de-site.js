function generateNbre_de_site() {
 
 
    map.addSource('______________', {
        'type': 'vector',
        'tiles': [ ""]

    });
    map.addLayer({
        'id': '______________',
        'type': 'fill',
        'source': '______________-source',
        'source-layer': '______________',

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
 
    
 
   const Nbredesite = document.querySelector('#NbredesiteCheckbox'); // Ajout d'une constante nbredesite pour l'action checkbox
 
   Nbredesite.addEventListener('change', (event) => { // Ecoute de l'evenement change pour la checkbox

       if(event.target.checked) { // Si l'action checking est faite, afficher les nombres de sites, 

        Nbre_de_site()

       }

       else  {//sinon, retirer-les


  // Supprimer la couche de la carte

  map.removeLayer('______________');

       }

   });
