const levelSection = document.querySelector(".levels");
const np_membership_btn = document.querySelector(".np_membership_btn");
const bronze_btn = document.querySelector(".bronze_btn");
const silver_btn = document.querySelector(".silver_btn");
const gold_btn = document.querySelector(".gold_btn");

const membershipdata = async (number) => {
    const fetchdata = await fetch("./data/membership_levels.json");
    const jsondata = await fetchdata.json();
    console.log(jsondata)
    populatedialog(jsondata, number);
}

np_membership_btn.addEventListener("click", () =>{
    membershipdata(0);
})

bronze_btn.addEventListener("click", () =>{
    membershipdata(0);
})

silver_btn.addEventListener("click", () =>{
    membershipdata(0);
})

gold_btn.addEventListener("click", () =>{
    membershipdata(0);
})

const populatedialog = (data, number) => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = ``;

    const createHeader = document.createElement("h2");
    const createParagraph = document.createElement("p");
    const createButton = document.createElement("button");

    createHeader.innerHTML = `${data[number].header}`;
    createParagraph.innerHTML = `${data[number].paragraph}`;
    createButton.setAttribute("type", "button");
    createButton.setAttribute("class", "close_button");
    createButton.innerHTML = `<img class="close_button_icon" src="images/x-circle-fill.svg" alt="close icon">`;

    wrapper.appendChild(createHeader);
    wrapper.appendChild(createParagraph);
    wrapper.appendChild(createButton);
    const dialog = document.querySelector(".dialog");
    dialog.showModal();

    createButton.addEventListener("click", () =>{
        dialog.close();
    })

    dialog.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            dialog.close();
        }
    })
}