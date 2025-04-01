map.on('load', function () {
  // Ajouter sources
  map.addSource('commerces_source', commercesSource);

  // Ajouter couches
  map.addLayer(commercesLayer);
});

