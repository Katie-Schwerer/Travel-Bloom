function searchCondition() {
    let beach = ["beach", "beaches"];
    let temples = ["temples", "temple"];
    let country = ["countries"]
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);


        })
}

searchCondition();