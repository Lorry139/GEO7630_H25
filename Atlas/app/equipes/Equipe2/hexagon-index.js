function generateDenssité_hexagon() {
 
 
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
            "fill-color": "rgb(245, 111, 8)",
            "fill-opacity": 1,
            "fill-width": 1,
            "fill-translate-anchor": "map"
        }
    });
};
