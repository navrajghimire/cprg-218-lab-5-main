// Footer
var currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

/* For navbar section */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var navbar = document.getElementById("navbar");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Section 1: Default Dog Image
    const defaultDogImage = document.getElementById("defaultDogImage");

    // Section 2: Get Dog info button
    const dogSelect = document.getElementById("dogSelect");
    const getDogButton = document.getElementById("getDogButton");
    const dogInfoSection = document.getElementById("dogInfoSection");

    getDogButton.addEventListener("click", () => {
        const selectedBreed = dogSelect.value;
        renderDogInfo(selectedBreed, dogInfoSection); // Pass the dogInfoSection
    });

    // Section 3: Search by dog name
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchDogSection = document.getElementById("searchDogSection");

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            searchDogByName(searchTerm, searchDogSection);
        } else {
            searchDogSection.textContent = "Please enter a dog name";
        }
    });

    // Section 4: Get Random Dog info
    const randomDogButton = document.getElementById("randomDogButton");
    const randomDogSection = document.getElementById("randomDogSection");

    randomDogButton.addEventListener("click", () => {
        renderRandomDogInfo(randomDogSection);
    });
});

// Function to fetch information about a specific dog breed
async function fetchDogInfo(breed) {
    try {
        const apiKey = "live_DgfhkNpY6NUTQwyGN99Mr8zbgE0Zbedw49Egwg70NzicEFVtUkIzBe6H8HLMRCrd"; // your "actual" API key
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Error fetching dog info:", error);
    }
}

// Function to fetch image of a specific dog breed
async function fetchDogImage(breed) {
    try {
        const apiKey = "live_DgfhkNpY6NUTQwyGN99Mr8zbgE0Zbedw49Egwg70NzicEFVtUkIzBe6H8HLMRCrd"; // your "actual" API key
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breed}`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error("Error fetching dog image:", error);
    }
}

// Function to render information about a specific dog breed
async function renderDogInfo(breed, section) {
    const dogInfo = await fetchDogInfo(breed);
    const dogImage = await fetchDogImage(dogInfo.id);

    if (dogInfo && dogImage) {
        const card = document.createElement("div");
        card.classList.add("card");

        const breedHeader = document.createElement("h2");
        breedHeader.textContent = dogInfo.name;

        const temperamentParagraph = document.createElement("p");
        temperamentParagraph.textContent = `Temperament: ${dogInfo.temperament}`;

        const img = document.createElement("img");
        img.src = dogImage;
        img.alt = dogInfo.name;
        img.style.width = "400px"; // Set image width to 400 pixels
        img.style.height = "300px"; // Set image height to 300 pixels

        card.appendChild(breedHeader);
        card.appendChild(temperamentParagraph);
        card.appendChild(img);

        section.innerHTML = ""; // Clear existing dog info
        section.appendChild(card);
    } else {
        section.innerHTML = "<p>Dog breed not found</p>";
    }
}

// Function to fetch information about a random dog breed
async function fetchRandomDogInfo() {
    try {
        const apiKey = "live_DgfhkNpY6NUTQwyGN99Mr8zbgE0Zbedw49Egwg70NzicEFVtUkIzBe6H8HLMRCrd"; // your "actual" API key
        const response = await fetch(`https://api.thedogapi.com/v1/breeds`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    } catch (error) {
        console.error("Error fetching random dog info:", error);
    }
}

// Function to render information about a random dog breed
async function renderRandomDogInfo(section) {
    const randomDogInfo = await fetchRandomDogInfo();
    const randomDogImage = await fetchDogImage(randomDogInfo.id);

    if (randomDogInfo && randomDogImage) {
        const card = document.createElement("div");
        card.classList.add("card");

        const breedHeader = document.createElement("h2");
        breedHeader.textContent = randomDogInfo.name;

        const temperamentParagraph = document.createElement("p");
        temperamentParagraph.textContent = `Temperament: ${randomDogInfo.temperament}`;

        const img = document.createElement("img");
        img.src = randomDogImage;
        img.alt = randomDogInfo.name;
        img.style.width = "400px"; // Set image width to 400 pixels
        img.style.height = "300px"; // Set image height to 300 pixels

        card.appendChild(breedHeader);
        card.appendChild(temperamentParagraph);
        card.appendChild(img);

        section.innerHTML = ""; // Clear existing dog info
        section.appendChild(card);
    } else {
        section.innerHTML = "<p>Failed to fetch random dog breed</p>";
    }
}

// Function to search for a dog by name
async function searchDogByName(name, section) {
    try {
        const apiKey = "live_DgfhkNpY6NUTQwyGN99Mr8zbgE0Zbedw49Egwg70NzicEFVtUkIzBe6H8HLMRCrd"; // your "actual" API key
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        const data = await response.json();
        if (data.length > 0) {
            renderDogInfo(data[0].name, section);
        } else {
            section.innerHTML = "<p>Dog not found</p>";
        }
    } catch (error) {
        console.error("Error searching dog by name:", error);
    }
}
