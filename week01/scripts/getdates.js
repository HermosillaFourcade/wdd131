// obtener año actual
const currentYear = new Date().getFullYear();

//mostrar el año actual
document.getElementById("currentyear").textContent = currentYear;

// obtener la ultima fecha de modificacion
// const lastModified = document.lastModified;

//mostrar la ultima fecha de modificacion
document.getElementById("lastModified").textContent = document.lastModified;