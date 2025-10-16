const menu_btn = document.getElementById("m-bar");
const menu = document.querySelector("body");

menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".m-nav") && !e.target.closest("#m-bar")) {
    document.body.classList.remove("active");
  }
});