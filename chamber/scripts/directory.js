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
const light_dark_mode = document.querySelector("body");

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// Switch grid format
gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
});

// Hamburger Menu
menu.addEventListener("click", () => {
    nav.classList.toggle("show");
    header.classList.toggle("close");

})

// Light & Dark mode btn
mode.addEventListener("click", () => {
    mode.classList.toggle("switch");
    light_dark_mode.classList.toggle("light_background");
    light_dark_mode.classList.toggle("dark_background")
})

// Testing element:
// info_section.innerHTML = "Hello world";

// Storing URL for the JSON file.
const json_url = "./data/members.json";

// Defining the async function.
const get_data = async () =>{
    const fetch_data = await fetch(json_url);
    const data = await fetch_data.json();
    // console.log(data.companies); -----> testing array
    create_section(data.companies);

}

// Function for creating my sections. 
const create_section = (array) => {

    // Loops through the items in the array.
    array.forEach(element => {
        // Creates elements need for the info card
        const article_grid = document.querySelector(".grid");
        let card = document.createElement("section");
        let card_header = document.createElement("h3");
        let card_email_para = document.createElement("p");
        let card_phone_para = document.createElement("p");
        let card_membership_level_para = document.createElement("p");
        let card_address_para = document.createElement("p");
        let card_url_link = document.createElement("a");
        let card_img = document.createElement("img");

        // Input information into created elements.
        card_header.textContent = `${element.names}`;
        card_address_para.innerHTML = `${element.addresses}`;
        card_email_para.innerHTML = `${element.email}`;
        card_phone_para.innerHTML = `${element.phone_numbers}`;
        card_url_link.innerHTML = `${element.website_URLs}`;
        card_url_link.setAttribute("href", element.website_URLs);
        card_membership_level_para.innerHTML = `${element.membership_level}`;
        card_img.setAttribute("src", element.image);
        card_img.setAttribute("alt", `${element.name} Picture`);
        card_img.setAttribute("loading", "lazy");


        // Appends all element to their parents and finally appends them to the info_section
        card.appendChild(card_img);
        card.appendChild(card_header);
        card.appendChild(card_address_para);
        card.appendChild(card_phone_para);
        card.appendChild(card_email_para);
        card.appendChild(card_url_link);
        article_grid.appendChild(card);
    });

}


get_data();