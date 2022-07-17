const apiUrl = "https://api.covid19api.com/summary";

function getApiData(url) {
    fetch(url) 
    .then((res) => {
        return res.json(res);
    })
    .then((data) => displayData(data))
    .catch((error) => console.log(error.message));
};

function displayData(data) {
    console.log(data);
    var index = 77;
    var country = data.Countries[index];
    document.getElementById("box1").innerText = country.Country;
    document.getElementById("box2").innerText = country.Date.slice(0,10);
    document.getElementById("box3").innerText = country.NewConfirmed;
    document.getElementById("box4").innerText = country.TotalConfirmed;
    document.getElementById("box5").innerText = country.NewDeaths;
    document.getElementById("box6").innerText = country.TotalDeaths;
    document.getElementById("box7").innerText = country.TotalRecovered;
}
getApiData(apiUrl);

// setTimeout(() => {
//     mainPageLoad();
// }, 4000);

// function mainPageLoad() {
//     document.getElementById("loadPage").style.display = "none";
//     document.getElementById("mainPage").style.display = "block";
// }