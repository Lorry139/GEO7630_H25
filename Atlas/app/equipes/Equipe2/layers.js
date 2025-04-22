map.on('load', function () {
 
    // Ajout de source vectorielle à la carte de l'équipe2:
    
            map.addSource('______________-source', { 
    
                'type': 'vector',
    
                'tiles': [ "https:______________/{z}/{x}/{y}.pbf "]
    
    
            });
    
            // Ajout de couche de type ______________ pour générer les stationnements
    
            map.addLayer({
    
                'id': '______________',
    
                'type': '______________',
    
                'source': '______________-source',
    
                'source-layer': '______________',
    // Dêfinition du style des couches 

    'paint': {

        "circle-color": "rgba(189, 19, 19, 1)", // utilisation des codes couleurs rouge, vert, bleu, alpha pour styliser la couche

        "circle-opacity": 1, // Opacité de 1 = 100%

        "circle-width": 1, // largeur =1

        "circle-translate-anchor": "map" // 

    }

});

};