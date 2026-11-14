// obtener año actual
const currentYear = new Date().getFullYear();

//mostrar el año actual
document.getElementById("currentyear").textContent = currentYear;

// obtener la ultima fecha de modificacion
// const lastModified = document.lastModified;

//mostrar la ultima fecha de modificacion
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);
const windChillElement = document.getElementById("windchill");

function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
