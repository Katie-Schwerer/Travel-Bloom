let results = document.getElementById('results');
let searchBtn = document.getElementById('searchbtn');
let clearBtn = document.getElementById('resetbtn')

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
    let countries = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].cities.length; j++) {
            countries.push(data[i].cities[j])
        }
    }

    searchBeachesandTemples(countries);
}

searchBtn.addEventListener('click', searchCondition);
clearBtn.addEventListener('click', resetResult);

function resetResult() {
    document.getElementById("conditionInput").value = "";
    window.location.reload();
}

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