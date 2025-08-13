import { discover_data } from "./discover_data.js";
console.table(discover_data);


const create_card = (data) => {
const container = document.getElementById("container");

    data.forEach(element => {
        const createSections = document.createElement("section");
        const createHeader = document.createElement("h2");
        const createDescription = document.createElement("p");
        const createAddress = document.createElement("p");
        const createSeason = document.createElement("figcaption");
        const createImage = document.createElement("img");
        const createButtom = document.createElement("button");

        createHeader.innerHTML = element.name;
        createAddress.innerHTML = element.address;
        createDescription.innerHTML = element.description;
        createSeason.innerHTML = `<strong>${element.best_time_to_visit}</strong>`;
        createButtom.innerHTML = 'Learn More';
        createImage.setAttribute("src", element.photo_url);
        createImage.setAttribute("loading", "lazy");
        createImage.setAttribute("alt", element.name);
        createImage.setAttribute("width", 300);
        createImage.setAttribute("height", 200);
        createSections.setAttribute("class", "card");
        createDescription.setAttribute("class", "description");
        createAddress.setAttribute("class", "address");
        createSeason.setAttribute("class", "season");


        createSections.appendChild(createHeader);
        createSections.appendChild(createImage);
        createSections.appendChild(createDescription);
        createSections.appendChild(createAddress);
        createSections.appendChild(createSeason);
        createSections.appendChild(createButtom);
        container.appendChild(createSections);
    });

}

// Testing Local Storage
const visit = localStorage.getItem("visitCounter") || 0;
let convertVisit = Number(visit);
convertVisit++;

if (convertVisit <= 1) {
    console.log("Welcome");
}
if (convertVisit >= 2 ) {
    console.log("Hello World!!");
    console.log(convertVisit);
}

localStorage.setItem("visitCounter", convertVisit);



const sidebar = document.getElementById('sidebar');
const lastVisit = localStorage.getItem('lastVisit'); // stored as milliseconds
const now = Date.now(); // current time in ms

if (!lastVisit) {
    // First visit
    sidebar.textContent = "Welcome! Let us know if you have any questions."
    console.log("Welcome! Let us know if you have any questions.");
} 
else {
    const lastVisitTime = Number(lastVisit);
    const msInDay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor((now - lastVisitTime) / msInDay);
    if (daysBetween < 1) {
        sidebar.textContent = "Back so soon! Awesome!";
    } 
    else if (daysBetween === 1) {
        sidebar.textContent = "You last visited 1 day ago.";
    } 
    else {
        sidebar.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

// Save current date/time for next visit
localStorage.setItem('lastVisit', now);

create_card(discover_data);