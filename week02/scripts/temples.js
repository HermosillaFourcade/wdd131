const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.innerHTML = "✖";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

// obtener año actual
const currentYear = new Date().getFullYear();

//mostrar el año actual
document.getElementById("currentyear").textContent = currentYear;

// obtener la ultima fecha de modificacion
// const lastModified = document.lastModified;

//mostrar la ultima fecha de modificacion
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
