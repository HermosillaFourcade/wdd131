// obtener año actual
const currentYear = new Date().getFullYear();

//mostrar el año actual
document.querySelector("#currentyear").textContent = currentYear;

// obtener la ultima fecha de modificacion
const lastModified = document.lastModified;

//mostrar la ultima fecha de modificacion
document.querySelector("#lastModified").textContent = 'Last Modified: ${lastModified}';