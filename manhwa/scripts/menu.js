const menu_btn = document.getElementById("m-bar");
const menu = document.querySelector(".m-nav");

menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});