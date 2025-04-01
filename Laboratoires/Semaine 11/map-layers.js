var commercesSource = {
  type: 'geojson',
  data: 'https://donnees.montreal.ca/dataset/.../download/businesses.geojson'
};

var commercesLayer = {
  id: 'commerces',
  type: 'circle',
  source: 'commerces_source',
  paint: {
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
};