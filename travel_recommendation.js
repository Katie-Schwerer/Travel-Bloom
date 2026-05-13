let results = document.getElementById('results');
let searchBtn = document.getElementById('searchbtn');

function searchBeachesandTemples(data) {
    let container = document.createElement('section');
    container.classList.add('travelResults')
    for (let i = 0; i < data.length; i++) {
        let travel = document.createElement('div');
        travel.classList.add("destination")
        travel.innerHTML += `<img src="${data[i].imageUrl}" alt="desc">`
        travel.innerHTML += `<h3>${data[i].name}</h3>`
        travel.innerHTML += `<p class="description">${data[i].description}</p>`
        container.appendChild(travel);
    }
    results.appendChild(container);
}

function searchForCities(data) {
    for (let i = 0; i < data.length; i++) {
        searchBeachesandTemples(data[i].cities)
    }
}
searchBtn.addEventListener('click', searchCondition);

function searchCondition() {
    let input = document.getElementById("conditionInput").value.toLowerCase();
    results.innerHTML = '';
    results.innerHTML += "<h2>Search Results</h2>";
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (input.includes("beach")) {
                searchBeachesandTemples(data["beaches"])
            } else if (input.includes("temple")) {
                searchBeachesandTemples(data["temples"])
            } else if (input.includes("countr")) {
                searchForCities(data["countries"])
            } else {
                results.innerHTML += "<p>None of Above</p>"
            }
        }
    )
}