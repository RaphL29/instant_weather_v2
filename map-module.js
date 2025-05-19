// Fonctionnalités de carte pour Instant Weather
let map = null;
let markers = [];

// Initialiser la carte
function initMap() {
  // Centrer sur la France par défaut
  map = L.map('map').setView([46.603354, 1.888334], 5);
  
  // Ajouter la couche de carte OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  return map;
}

// Mettre à jour la carte avec les nouvelles données
function updateMap(cityInfo, forecastData, getWeatherIcon) {
  // Vérifier si la carte est initialisée
  if (!map) {
    console.error("La carte n'est pas initialisée");
    return;
  }

  // Nettoyer les marqueurs existants
  clearMarkers();
  
  // Centre la carte sur la ville sélectionnée
  map.setView([cityInfo.latitude, cityInfo.longitude], 10);
  
  // Créer un marqueur pour la ville avec un popup contenant les informations météo
  addCityMarker(cityInfo, forecastData[0], getWeatherIcon);
}

// Nettoyer les marqueurs existants
function clearMarkers() {
  if (markers.length > 0) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
  }
}

// Ajouter un marqueur pour une ville
function addCityMarker(cityInfo, forecast, getWeatherIcon) {
  const weatherIcon = getWeatherIcon(forecast.weather);
  
  const marker = L.marker([cityInfo.latitude, cityInfo.longitude]).addTo(map);
  marker.bindPopup(`
    <div class="popup-content">
      <h3>${cityInfo.name}</h3>
      <div class="weather-icon">${weatherIcon}</div>
      <p>Température: ${forecast.tmin}°C à ${forecast.tmax}°C</p>
      <p>Pluie: ${forecast.rr10 || 0} mm</p>
      <p>Vent: ${forecast.wind10m} km/h (${forecast.dirwind10m}°)</p>
    </div>
  `).openPopup();
  
  markers.push(marker);
}

// Exporter les fonctions
export { initMap, updateMap };