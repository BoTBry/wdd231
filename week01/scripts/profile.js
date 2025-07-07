const current_year = document.querySelector(".current_year");
const current_datetime = document.querySelector(".current_datetime");
const nav_btn = document.querySelector(".nav_btn");
const ham_btn = document.querySelector(".ham_btn");
const ham_btn2 = document.querySelector(".ham_btn2");
const ham_btn3 = document.querySelector(".ham_btn3");
const show_nav = document.querySelector("nav");
const get_date = new Date()
const lastModified = document.lastModified;

document.querySelector(".lastModification").textContent = `${lastModified}` 
current_year.textContent = `${get_date.getFullYear()}`;

nav_btn.addEventListener("click", ()=> {
    ham_btn.classList.toggle("show");
    ham_btn2.classList.toggle("show2");
    ham_btn3.classList.toggle("show3");
    show_nav.classList.toggle("show_nav");
})