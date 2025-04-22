function generateArret_stationnements() {
 
 
    map.addSource('______________.', {
        'type': 'circle',
        'tiles': [ ""]

    });
    map.addLayer({
        'id': '______________.',
        'type': 'circle',
        'source': '______________-source',
        'source-layer': '______________',

        'paint': {
            "circle-color": "rgba(189, 19, 19, 1)",
            "circle-opacity": 1,
            "circle-width": 1,
            "circle-translate-anchor": "map"
        }
    });
};

// Ajouter un événement de clic sur le bouton "loadLayer" 
// pour charger la couche de points aléatoires
//document
   // .getElementById('Arret_stationnements') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
   // .addEventListener('click', Arret_stationnements);
 
    
 
 
   const Arret_stationnements = document.querySelector('#Arret_stationnementsCheckbox');
 
   ArretBus.addEventListener('change', (event) => {
       if(event.target.checked) {
        generateArret_stationnements()
       }

       
           else  {//sinon, retirer-les


               // Supprimer la couche de la carte
               map.removeLayer('______________.');
                    }
                });