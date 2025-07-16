    
const cardSection = document.getElementById("cards");
const getProphetData = async () => {
    const fetchData = await fetch("./json/latter-day-prophets.json");
    const data = await fetchData.json();
    // console.table(data.prophets)
    create_cards(data.prophets);
}
getProphetData();
const create_cards = (prophets) => {

    prophets.forEach((element, index) => {

    // Creates elements to store the data
    let create_section = document.createElement("section");
    let create_section_header = document.createElement("h2");
    let create_section_para1 = document.createElement("p");
    let create_section_para2 = document.createElement("p");
    let create_section_img = document.createElement("img");

    // Adds the data to the elements
    create_section_header.textContent = `${element.name} ${element.last}`;
    create_section_para1.textContent =`Date of Birth: ${element.birthdate}`;
    create_section_para2.textContent =`Place of Birth: ${element.birthplace}`;
    create_section_img.setAttribute("src", element.imageurl);
    create_section_img.setAttribute("alt", `${element.name} ${element.last}`)
    create_section_img.setAttribute("loading", "lazy")

    //Appends the elements to the section card
    create_section.appendChild(create_section_header);
    create_section.appendChild(create_section_para1);
    create_section.appendChild(create_section_para2);
    create_section.appendChild(create_section_img);

    //Adds the cards to the card id
    cardSection.appendChild(create_section);
    });
}
