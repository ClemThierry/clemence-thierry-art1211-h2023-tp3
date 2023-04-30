let openMenuButton = document.querySelector(".open");
let closeMenuButton = document.querySelector(".close");


openMenuButton.addEventListener("click", () => {
    closeMenuButton.classList.remove("hide");
    document.querySelector(".menu").classList.add("menu-open");
    openMenuButton.classList.add("hide");
})

closeMenuButton.addEventListener("click", () => {
    openMenuButton.classList.remove("hide");
    document.querySelector(".menu").classList.remove("menu-open");
    closeMenuButton.classList.add("hide");
})