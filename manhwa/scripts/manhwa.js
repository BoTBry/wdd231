// Fetches data from external json file.
const membershipdata = async () => {
    const fetchdata = await fetch("./data/explore.json");
    const jsondata = await fetchdata.json();
    console.log(jsondata);
    create_card(jsondata)
}
membershipdata();

// Function responsible for creating and appending the items into the card.
const create_card = (data) => {
    data.forEach(data => {
        
    
        // Calls a section element with the class of "cards_section" from a HTML file and stores it in the "card_section" variable.
        const cards_section = document.querySelector(".cards_section");

        // Creates a section element in our HTML file and gives it a class attribute of "card".
        const card = document.createElement('section');
        card.setAttribute("class", "card");
        card.style.backgroundImage = `url('${data.profitBg_photo}')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.backgroundRepeat = "no-repeat";
        cards_section.appendChild(card);

        // This area is responsible for creating the element which will be in our card.
        const card_backdrop = document.createElement("div");
        card_backdrop.setAttribute("class", "card_backdrop");
        card.appendChild(card_backdrop);

        // Creates and appends the profile picture.
        const card_profile_pic = document.createElement('img');
        card_profile_pic.setAttribute("class", "profilepic");
        card_profile_pic.setAttribute("src", data.profitBg_photo);
        card_profile_pic.setAttribute("alt", data.name);
        card_profile_pic.setAttribute("loading", "lazy");
        card_profile_pic.setAttribute("width", "65px");
        card_profile_pic.setAttribute("height", "65px");
        card.appendChild(card_profile_pic);

        // Creates add appends the title
        const card_title = document.createElement('h2');
        card_title.textContent = `${data.name}`;
        card.appendChild(card_title);

        // Creates and appends the status icon and text.
        const card_status_container = document.createElement('div');
        card_status_container.setAttribute("class", "status_container");
        card.appendChild(card_status_container);

        const card_status_icon_span = document.createElement('span');
        card_status_container.appendChild(card_status_icon_span);
        const card_status_icon = document.createElement('img'); 
        card_status_icon.setAttribute("class", "statusico");
        card_status_icon.setAttribute("src", data.status_icon);
        card_status_icon.setAttribute("alt", data.status);
        card_status_icon_span.appendChild(card_status_icon);

        const card_status = document.createElement('p');
        card_status.setAttribute("class", "status_p");
        card_status.textContent = data.status;
        card_status_icon_span.appendChild(card_status);

        // Creates a div where the genre will be dislpayed.
        const create_genre_section = document.createElement('div');
        create_genre_section.setAttribute("class", "genre_section");
        card.appendChild(create_genre_section);


        /*********** Creates a function to add the genre list *************/
        const card_genre_list = (array) =>{
            array.forEach((elementx) =>{

                // Creates a div where the genre will be dislpayed.
                const create_genre_tab = document.createElement('span');
                create_genre_tab.setAttribute("class", "genre");

                // Adds the genre name to the div created above.
                const create_genre_tab_p = document.createElement("p");
                create_genre_tab_p.textContent = elementx;

                create_genre_tab.appendChild(create_genre_tab_p);
                create_genre_section.appendChild(create_genre_tab);

            })
        };
        // Calls the function and inputs the genre data 
        card_genre_list(data.genre);

        // Function is used for creating a div to the star icon which will be used for the rating and 
        // checks if the rating is greater or less than a certain number so it can give it and amount of stars.
        function rate (rating) {

            const star_section = document.createElement("span");
            star_section.setAttribute("class", "star_span");
            const rating_p = document.createElement("p");
            rating_p.setAttribute("class", "rating_p");
            rating_p.innerHTML = ``;

            if (rating < 1) {
                star_section.innerHTML = ``;
                
                // Creates five empty stars
                for (let index = 0; index < 5; index++) {
                    let one_emptystar = document.createElement("img");
                    one_emptystar.setAttribute("src", "./images/icon/emptystar.svg");
                    one_emptystar.setAttribute("alt", "star");
                    star_section.appendChild(one_emptystar);
                }
            }

            if (rating >= 1) {
                star_section.innerHTML = ``;
                
                // Creates one full star
                let onestar = document.createElement("img");
                onestar.setAttribute("src", "./images/icon/fullstar.svg");
                onestar.setAttribute("alt", "star");
                star_section.appendChild(onestar);

                // Creates four empty stars
                for (let index = 0; index < 4; index++) {
                    let one_emptystar = document.createElement("img");
                    one_emptystar.setAttribute("src", "./images/icon/emptystar.svg");
                    one_emptystar.setAttribute("alt", "star");
                    star_section.appendChild(one_emptystar);
                }

            }
            if (rating >= 2) {
                star_section.innerHTML = ``;
                
                // Creates two full star
                for (let index = 0; index < 2; index++) {
                    let onestar = document.createElement("img") ;
                    onestar.setAttribute("src", "./images/icon/fullstar.svg");
                    onestar.setAttribute("alt", "star");
                    star_section.appendChild(onestar);
                }

                // Creates three empty stars
                for (let index = 0; index < 3; index++) {
                    let one_emptystar = document.createElement("img");
                    one_emptystar.setAttribute("src", "./images/icon/emptystar.svg");
                    one_emptystar.setAttribute("alt", "star");
                    star_section.appendChild(one_emptystar);
                }

            }
            if (rating >= 3) {
                star_section.innerHTML = ``;
                
                // Creates three full star
                for (let index = 0; index < 3; index++) {
                    let onestar = document.createElement("img");
                    onestar.setAttribute("src", "./images/icon/fullstar.svg");
                    onestar.setAttribute("alt", "star");
                    star_section.appendChild(onestar);
                }

                // Creates two empty stars
                for (let index = 0; index < 2; index++) {
                    let one_emptystar = document.createElement("img");
                    one_emptystar.setAttribute("src", "./images/icon/emptystar.svg");
                    one_emptystar.setAttribute("alt", "star");
                    star_section.appendChild(one_emptystar);
                }

            }
            if (rating >= 4) {
                star_section.innerHTML = ``;
                
                // Creates four full star
                for (let index = 0; index < 4; index++) {
                    let onestar = document.createElement("img");
                    onestar.setAttribute("src", "./images/icon/fullstar.svg");
                    onestar.setAttribute("alt", "star");
                    star_section.appendChild(onestar);
                }

                // Creates one empty stars
                for (let index = 0; index < 1; index++) {
                    let one_emptystar = document.createElement("img");
                    one_emptystar.setAttribute("src", "./images/icon/emptystar.svg");
                    one_emptystar.setAttribute("alt", "star");
                    star_section.appendChild(one_emptystar);
                }

            }
            if (rating === 5) {
                star_section.innerHTML = ``;

                // Creates five full stars
                for (let index = 0; index < 5; index++) {
                    let onestar = document.createElement("img");
                    onestar.setAttribute("src", "./images/icon/fullstar.svg");
                    onestar.setAttribute("alt", "star");
                    star_section.appendChild(onestar);
                }

            };

            // Appends the stars and rating to the card.
            rating_p.textContent = rating;
            star_section.appendChild(rating_p);
            card.appendChild(star_section);
            
        };
        rate(data.rating);

        // Creates and appends the description.
        const card_description = document.createElement("div");
        card_description.setAttribute("class", "card_description");
        const card_description_p = document.createElement("p");
        card_description_p.setAttribute("class", "card_description_p");

        // Adds content to the description.
        card_description_p.innerHTML = ``;
        card_description_p.textContent = `${data.description}`;
        card_description.appendChild(card_description_p);

        // Appends card_description to the card.
        card.appendChild(card_description);

        // Creates the "Explore" link to direct to the dialog.
        const card_linkDialog = document.createElement("button");
        card_linkDialog.setAttribute("class", "dialogbutton");
        card_linkDialog.setAttribute("type", "button");

        card_linkDialog.textContent = `Explore`;
        card.appendChild(card_linkDialog);


    });


        //const card_wrapper = document.querySelector(".wrapper");

}

for (let index = 1; index < 4; index++) {
    console.log("1");
    
}