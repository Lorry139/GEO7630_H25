// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

function loadTeam(teamName) {
    // Vider toutes les divs
    document.getElementById('Equipe1').innerHTML = '';
    document.getElementById('Equipe2').innerHTML = '';
    document.getElementById('Equipe3').innerHTML = '';
    document.getElementById('Equipe4').innerHTML = '';
    document.getElementById('Equipe5').innerHTML = '';
    // Charger le contenu de l'équipe sélectionnée

    const path = teamName === 'Accueil' 
    ? './index.html' 
    : `./equipes/${teamName}/index.html`;

    fetch(path)
        .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
        })
        .then(data => {
        document.getElementById(teamName).innerHTML = data;
        })
        .catch(error => {
        console.error('There was a problem with fetching the team content:', error);
        });

    }

    var nav = new maplibregl.NavigationControl({
        showCompass: true, // affichage de la boussole
        showZoom: true, // affichage des boutons de zoom
        visualizePitch: true // affichage de l'angle d'inclinaison
    });
    map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte
    
    // création du contrôle de géolocalisation
    var geolocateControl = new maplibregl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true // activation de la géolocalisation précise
        },
        trackUserLocation: true // suivi automatique de la position de l'utilisateur
    })
    
    map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte
    
    // création du contrôle d'échelle
    var scale = new maplibregl.ScaleControl({
        unit: 'metric' // utilisation de l'unité métrique
    });
    
    map.addControl(scale); // ajout du contrôle en bas à gauche de la carte