// 1. Año actual y última modificación
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// 2. Menú hamburguesa

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// 3. Arreglo de templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Concepción Chile",
    location: "Concepción, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/7873102ba98c0c2b6f45ca655d737cf5a5e7f7c2/full/500%2C/0/default"
  },
  {
    templeName: "Asunción Paraguay",
    location: "Asunción, Paraguay",
    dedicated: "2002, May, 19",
    area: 11906,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/68dfd881f93cb86e99828aa547eac056189c55ff/full/500%2C/0/default"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 19",
    area: 30659,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/500%2C/0/default"
  }

];

// 4. Función para crear y mostrar las tarjetas en <main>
const container = document.querySelector(".gallery-temples");
const categoryTitle = document.querySelector("#category-title");

function displayTemples(filteredTemples) {
  container.innerHTML = ""; // Limpia el contenedor antes de mostrar

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

// Mostrar todos los templos al cargar la página
displayTemples(temples);

// 5. Eventos para filtrar al hacer clic en los enlaces del <nav>
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que la página recargue
    const filter = link.textContent.trim();
    categoryTitle.textContent = filter;

    if (filter === "Old") {
      // Templos construidos antes de 1900
      displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
    } else if (filter === "New") {
      // Templos construidos después de 2000
      displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
    } else if (filter === "Large") {
      // Templos mayores a 90,000 pies cuadrados
      displayTemples(temples.filter(t => t.area > 90000));
    } else if (filter === "Small") {
      // Templos menores a 10,000 pies cuadrados
      displayTemples(temples.filter(t => t.area < 10000));
    } else {
      // "Home" muestra todos
      displayTemples(temples);
    }
  });
});

