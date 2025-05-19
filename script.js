// Importer les modules
import { getWeatherIcon } from './weather-icons.js';
import { initMap, updateMap } from './map-module.js';

const token = '13c66db1c00607a0230ab3dc1503655095051b1e8d8d51052aedad1c9fe5ff55'; // Remplace par ton token MeteoConcept
let map = null;

// Initialiser la carte au chargement de la page
window.onload = function() {
  map = initMap();
};

document.getElementById('weatherForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const days = parseInt(document.getElementById('days').value);
  const selectedOptions = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);

  try {
    const locRes = await fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${city}`);
    const locData = await locRes.json();
    if (!locData.cities || locData.cities.length === 0) throw new Error('Ville non trouvée');

    const cityInfo = locData.cities[0];
    const insee = cityInfo.insee;
    const weatherRes = await fetch(`https://api.meteo-concept.com/api/forecast/daily?token=${token}&insee=${insee}`);
    const weatherData = await weatherRes.json();

    const selectedForecast = weatherData.forecast.slice(0, days);
    renderWeather(selectedForecast, cityInfo, selectedOptions);
    
    // Afficher la ville sur la carte
    updateMap(cityInfo, selectedForecast, getWeatherIcon);
  } catch (err) {
    document.getElementById('weatherResult').innerHTML = `<p>Erreur : ${err.message}</p>`;
  }
});

function renderWeather(data, cityInfo, options) {
  const container = document.getElementById('weatherResult');
  container.innerHTML = '';

  data.forEach((day, index) => {
    const card = document.createElement('div');
    card.className = 'weather-card';
    
    // Obtenir le code météo et déterminer l'icône à afficher
    const weatherIcon = getWeatherIcon(day.weather);
    
    card.innerHTML = `
      <h2>${cityInfo.name} - Jour ${index + 1}</h2>
      <div class="weather-icon">${weatherIcon}</div>
      <p>Temp. : ${day.tmin}°C à ${day.tmax}°C</p>
      ${options.includes('lat') ? `<p>Latitude : ${cityInfo.latitude}</p>` : ''}
      ${options.includes('lon') ? `<p>Longitude : ${cityInfo.longitude}</p>` : ''}
      ${options.includes('rain') ? `<p>Pluie : ${day.rr10 || 0} mm</p>` : ''}
      ${options.includes('wind') ? `<p>Vent moyen : ${day.wind10m} km/h</p>` : ''}
      ${options.includes('dir') ? `<p>Direction du vent : ${day.dirwind10m}°</p>` : ''}
    `;
    container.appendChild(card);
  });
}