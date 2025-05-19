// Mapping des codes météo de l'API vers des icônes emoji appropriées
const weatherIcons = {
    0: '☀️', // Soleil
    1: '🌤️', // Peu nuageux
    2: '⛅', // Ciel voilé
    3: '☁️', // Nuageux
    4: '☁️', // Très nuageux
    5: '🌫️', // Brouillard
    6: '🌫️', // Brouillard givrant
    7: '🌧️', // Pluie faible
    8: '🌧️', // Pluie modérée
    9: '🌧️', // Pluie forte
    10: '🌧️', // Pluie faible verglaçante
    11: '🌧️❄️', // Pluie modérée verglaçante
    12: '🌧️❄️', // Pluie forte verglaçante
    13: '🌨️', // Bruine
    14: '🌨️', // Neige faible
    15: '🌨️', // Neige modérée
    16: '🌨️', // Neige forte
    20: '🌦️', // Averses de pluie locales et faibles
    21: '🌦️', // Averses de pluie locales
    22: '🌦️', // Averses locales et fortes
    30: '🌩️', // Tempête
    31: '🌪️', // Vent violent
    32: '🌫️', // Brume
    40: '🌧️', // Pluie
    41: '🌨️', // Neige
    42: '🌧️', // Pluie et neige mêlées
    43: '🌨️', // Neige fondue
    44: '🌧️❄️', // Pluie verglaçante
    45: '🌨️', // Averses de neige
    46: '🌨️', // Averses de neige faibles
    47: '🌨️', // Averses de neige modérées à fortes
    48: '🌫️', // Brouillard givrant
    60: '⛈️', // Orages
    61: '⛈️', // Orages faibles et locaux
    62: '⛈️', // Orages locaux
    63: '⛈️', // Orages forts et locaux
    64: '⛈️', // Orages faibles
    65: '⛈️', // Orages
    66: '⛈️', // Orages forts
    67: '⛈️', // Orages forts avec grêle
    68: '⛈️', // Orages locaux avec grêle
    70: '⛅', // Passages nuageux
    71: '☁️', // Fortement nuageux
    72: '☁️', // Couvert
    73: '⛅', // Éclaircies
    74: '⛅', // Variablement nuageux
    75: '☁️', // Fortement nuageux avec averses
    76: '⛅', // Éclaircies avec averses
    77: '⛅', // Variablement nuageux avec averses
    78: '☁️', // Couvert avec averses
    100: '🌡️', // Orages avec grêle
    101: '❄️', // Neige
    102: '🌧️', // Pluie
    103: '☁️', // Nuageux
    104: '⛅', // Ensoleillé
    105: '⛅', // Variable
    106: '☁️', // Couvert
    107: '🌫️', // Brouillard
    108: '⛈️', // Orages
    default: '❓'  // Inconnu
  };
  
  // Fonction pour obtenir l'icône météo en fonction du code
  function getWeatherIcon(weatherCode) {
    return weatherIcons[weatherCode] || weatherIcons.default;
  }
  
  // Exporter la fonction pour l'utiliser ailleurs
  export { getWeatherIcon };