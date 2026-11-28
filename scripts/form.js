const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// 1. Rellenar opciones del select en form.html (name visible, id como value)
const productSelect = document.querySelector("#productName");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// 2. Contador de reseñas completadas en localStorage (se ejecuta en review.html)
const reviewCounterDisplay = document.querySelector("#reviewCount");
if (reviewCounterDisplay) {
    let reviewCount = Number(localStorage.getItem("numReviews-ls")) || 0;
    reviewCount++;
    localStorage.setItem("numReviews-ls", reviewCount);
    reviewCounterDisplay.textContent = reviewCount;
}

// 3. Footer dinámico (Año actual y fecha de última modificación)
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
