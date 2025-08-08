import {getWeather,  myUrl, pastMyUrl, pastForeCast} from "./weather.js";

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
        let card = document.createElement("section");
        let info_div = document.createElement("div");
        let card_header = document.createElement("h2");
        let card_email_para = document.createElement("p");
        let card_url_para = document.createElement("p");
        let card_phone_para = document.createElement("p");
        let card_membership_level_para = document.createElement("p");
        let card_address_para = document.createElement("p");
        let card_url_link_span = document.createElement("span");
        let card_url_link = document.createElement("a");
        let card_img = document.createElement("img");

        // Input information into created elements.
        card_header.textContent = `${element.names}`;
        card_address_para.innerHTML = `<strong>Address: </strong>${element.addresses}`;
        card_email_para.innerHTML = `<strong>Email: </strong>${element.email}`;
        card_phone_para.innerHTML = `<strong>Phone: </strong>${element.phone_numbers}`;
        card_url_link.innerHTML = `${element.website_URLs}`;
        card_url_link.setAttribute("href", element.website_URLs)
        card_url_para.innerHTML = `<strong>URL: </strong> `;
        card_membership_level_para.innerHTML = `<strong>membership Level: </strong>${element.membership_level}`;
        card_img.setAttribute("src", element.image);
        card_img.setAttribute("alt", `${element.names} Logo`);
        card_img.setAttribute("loading", "lazy");


        // Appends all element to their parents and finally appends them to the info_section
        card.appendChild(card_header);
        card.appendChild(info_div);
        info_div.appendChild(card_address_para);
        info_div.appendChild(card_phone_para);
        card_url_link_span.appendChild(card_url_link);
        card_url_para.appendChild(card_url_link_span);
        info_div.appendChild(card_url_para);
        info_div.appendChild(card_membership_level_para);
        card.appendChild(card_img);
        info_section.appendChild(card);
    });

}


get_data();
getWeather(myUrl);
pastForeCast(pastMyUrl);