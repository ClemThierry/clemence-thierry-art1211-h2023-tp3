/*Animation du menu mobile*/

let ouvrirMenuButton = document.querySelector(".ouvrir");
let fermerMenuButton = document.querySelector(".fermer");


ouvrirMenuButton.addEventListener("click", () => {
    fermerMenuButton.classList.remove("cache");
    document.querySelector(".menu").classList.add("menu-ouvrir");
    ouvrirMenuButton.classList.add("cache");
})

fermerMenuButton.addEventListener("click", () => {
    ouvrirMenuButton.classList.remove("cache");
    document.querySelector(".menu").classList.remove("menu-ouvrir");
    fermerMenuButton.classList.add("cache");
})