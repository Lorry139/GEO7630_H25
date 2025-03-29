map.addSource('commerces_source', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
  });
  
  map.addLayer({
    id: 'commerces',
    type: 'circle',
    source: 'commerces_source',
    paint: {
      // Rayon variable selon le type
      'circle-radius': [
        'match',
        ['get', 'type'],
        'Épicerie', 5,
        'Pâtisserie/Boulangerie', 7,
        'Distributrice automatique', 4,
        'Pharmacie', 6,
        'Restaurant', 5,
        3
      ],
      // Couleur variable selon le type
      'circle-color': [
        'match',
        ['get', 'type'],
        'Épicerie', 'orange',
        'Pâtisserie/Boulangerie', 'yellow',
        'Distributrice automatique', 'blue',
        'Pharmacie', 'green',
        'Restaurant', 'purple',
        'grey'
      ],
      'circle-stroke-color': '#fff',
      'circle-stroke-width': 1
    },
    filter: ['==', ['get', 'statut'], 'Ouvert']
  });

map.addSource('arrondissements-source', {
    type: 'geojson', // Type de source de données
    data: 'https://donnees.montreal.ca/fr/dataset/limites-administratives-agglomeration/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794' // URL pgFeatureServ GeoJSON ! Attention il faut bien inclure la méthode qui fait la requete sans limite d'items de données
});

map.addLayer({
    id: 'arrondissements',
    type: 'fill',
    source: 'arrondissements-source',
    paint: {
      'fill-outline-color': 'black',
      'fill-color': '#cccccc',
      'fill-opacity': 0.3
    }
  });

  map.addLayer({
    id: 'arrondissements-labels',
    type: 'symbol',
    source: 'arrondissements_source',
    layout: {
      'text-field': ['get', 'nom'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 14,
      'text-anchor': 'center'
    },
    paint: {
      'text-color': '#111',
      'text-halo-color': '#fff',
      'text-halo-width': 1.5
    }
  });
  