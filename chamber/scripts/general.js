const info_section = document.querySelector(".info_section");
const current_year = document.querySelector(".current_year");
const lastModification = document.querySelector(".lastModification");
const myNameElement = document.querySelector(".name");
const myName = "Chigbu Chiemela Bryan";

const get_year = new Date();
const last_modified_date = document.lastModified;

current_year.textContent = `${get_year.getFullYear()}`;
lastModification.textContent = `${last_modified_date}`;
myNameElement.textContent = `${myName}`

// Notification Toggle
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const mode = document.querySelector(".mode");
// const light_dark_mode = document.querySelector("body");
const htmlpage = document.querySelector("html");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
    header.classList.toggle("close");

})

mode.addEventListener("click", () => {
    mode.classList.toggle("switch");
    // light_dark_mode.classList.toggle("light_background");
    // light_dark_mode.classList.toggle("dark_background");
    htmlpage.classList.toggle("light_background");
    htmlpage.classList.toggle("dark_background");
})

// Testing element:
// info_section.innerHTML = "Hello world";