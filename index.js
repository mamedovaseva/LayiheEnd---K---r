let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let imageContainer = document.querySelector(".section2-images");
function getScrollAmount() {
    const divWidth = document.querySelector('.section2-images div').offsetWidth;
    const screenWidth = window.innerWidth;
    if (screenWidth <= 400) {
        return divWidth; 
    } else {
        return divWidth; 
    }
}
leftButton.addEventListener("click", () => {
    imageContainer.scrollBy({
        left: -getScrollAmount(), 
        behavior: "smooth",
    });
});
rightButton.addEventListener("click", () => {
    imageContainer.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
    });
});
window.addEventListener("resize", () => {
    console.log(`Yeni sürüşmə məsafəsi: ${getScrollAmount()}px`);
});
document.addEventListener("DOMContentLoaded", () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favorites-container");
    if (favorites.length === 0) {
        container.innerHTML = "<p>Favoritlər yoxdur.</p>";
    } else {
        favorites.forEach((favorite) => {
            const div = document.createElement("div");
            div.classList.add("favorite-item");
            if (favorite && favorite.html) {
                div.innerHTML = favorite.html;
            } else {
                div.innerHTML = "<p>Favorit tapılmadı</p>";
            }
            const like1Button = div.querySelector(".like1");
            if (like1Button) {
                like1Button.addEventListener("click", function () {
                    div.remove();
                    const updatedFavorites = favorites.filter((item) => item.id !== favorite.id);
                    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                });
            }
            container.appendChild(div);
        });
    }
});
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
document.addEventListener("DOMContentLoaded", function () {
    favorites.forEach((favorite) => {
        document.querySelectorAll("div[data-id]").forEach((div) => {
            if (div.dataset.id === favorite.id) {
                const likeButton = div.querySelector(".like");
                const like1Button = div.querySelector(".like1");
                if (likeButton && like1Button) {
                    likeButton.style.display = "none"; 
                    like1Button.style.display = "inline-block"; 
                }
            }
        });
    });
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});
document.querySelectorAll(".like").forEach((likeButton) => {
    likeButton.addEventListener("click", function () {
        this.style.display = "none"; 
        this.nextElementSibling.style.display = "inline-block";
        const parentDiv = this.closest("div");
        const favoriteData = {
            id: parentDiv.dataset.id,
            html: parentDiv.outerHTML || '' 
        };
        if (!favorites.find(fav => fav.id === favoriteData.id)) {
            favorites.push(favoriteData);
            localStorage.setItem("favorites", JSON.stringify(favorites)); 
        }
    });
});
document.querySelectorAll(".like1").forEach((like1Button) => {
    like1Button.addEventListener("click", function () {
        this.style.display = "none"; 
        this.previousElementSibling.style.display = "inline-block";
        const parentDiv = this.closest("div");
        favorites = favorites.filter((favorite) => favorite.id !== parentDiv.dataset.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});
document.getElementById("favorite-icon").addEventListener("click", function () {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    localStorage.setItem("favorites", JSON.stringify(favorites)); 
    window.location.href = "favorites.html"; 
});
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const data = [
        { name: "Bakı", url: "./baku/" },
        { name: "Naxçıvan", url: "./Nakchvan/" },
        { name: "Qəbələ", url: "./gabala/" },
        { name: "Quba", url: "./Quba/" },
        { name: "Qusar", url: "./Qusar/" },
        { name: "İsmayıllı", url: "./İsmayillı/" },
        { name: "Şəki", url: "./Şəki" },
        { name: "Şamaxı", url: "./Şamaxı" },
        { name: "Xızı", url: "./Xızı" },
        { name: "Göygöl", url: "./slide1" },
        { name: "Qarabağ", url: "./slide5" }
    ];
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = "";
        if (query) {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
            if (filteredData.length > 0) {
                searchResults.style.display = "block";
                filteredData.forEach(item => {
                    const resultItem = document.createElement("a");
                    resultItem.textContent = item.name;
                    resultItem.href = item.url;
                    resultItem.classList.add("result-item");
                    searchResults.appendChild(resultItem);
                    resultItem.addEventListener("click", () => {
                        searchInput.value = "";
                        searchResults.style.display = "none";
                    });
                });
            } else {
                searchResults.style.display = "block";
                searchResults.innerHTML = `<p>No results found</p>`;
            }
        } else {
            searchResults.style.display = "none";
        }
    });
    document.addEventListener("click", (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = "none";
            searchInput.value = ""; 
        }
    });
});

function initializeMap() {
    const map = L.map('mapContainer').setView([40.1431, 47.5769], 6); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}
let mapModal = document.getElementById('map-modal');
let mapContainer = document.getElementById('mapContainer');
document.getElementById('mapTrigger').addEventListener('click', function () {
    mapModal.style.display = 'block';
    mapContainer.style.display = 'block'; 
    initializeMap();
});
document.getElementById('mapTrigger1').addEventListener('click', function () {
    mapModal.style.display = 'block';
    mapContainer.style.display = 'block';
    initializeMap();
});
document.getElementById('close-modal').addEventListener('click', function () {
    mapModal.style.display = 'none';
    mapContainer.style.display = 'none';
});
window.addEventListener('click', function (event) {
    const mapModal = document.getElementById('map-modal');
    if (event.target === mapModal) {
        mapModal.style.display = 'none'; 
        const mapContainer = document.getElementById('mapContainer');
        mapContainer.style.display = 'none';
    }
});
 document.getElementById('districtLink').addEventListener('click', function (e) {
    const district = document.querySelector('.district');
    e.preventDefault(); 
    if (district.style.display === 'none' || district.style.display === '') {
        district.style.display = 'block'; 
    } else {
        district.style.display = 'none'; 
    }
});
document.addEventListener('click', function (e) {
    const district = document.querySelector('.district');
    const districtLink = document.getElementById('districtLink');
    if (!district.contains(e.target) && e.target !== districtLink) {
        district.style.display = 'none';
    }
});
document.querySelector(".burger").addEventListener("click", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.toggle("active");
});
document.addEventListener("click", function (e) {
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerIcon = document.querySelector(".burger");
    if (!burgerMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
        burgerMenu.classList.remove("active");
    }
});
document.querySelector(".user-icon").addEventListener("click", function () {
    window.location.href = "register.html";
});
document.getElementById('districtLink1').addEventListener('click', function (e) {
    const district1 = document.querySelector('.district1');
    e.preventDefault();
    if (district1.style.display === 'none' || district1.style.display === '') {
        district1.style.display = 'block'; 
    } else {
        district1.style.display = 'none';
    }
});
document.addEventListener('click', function (e) {
    const district1 = document.querySelector('.district1');
    const districtLink1 = document.getElementById('districtLink1');
    if (!district1.contains(e.target) && e.target !== districtLink1) {
        district1.style.display = 'none'; 
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { 
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,  
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const weatherTrigger = document.getElementById("weatherTrigger");
    const weatherModal = document.getElementById("weather-modal");
    const closeWeatherModal = document.getElementById("close-weather-modal");
    const getWeatherButton = document.getElementById("get-weather");
    const cityInput = document.getElementById("city-input");
    const weatherDetails = document.getElementById("weatherDetails");
    weatherTrigger.addEventListener("click", function() {
        weatherModal.style.display = "block";
    });
    closeWeatherModal.addEventListener("click", function() {
        weatherModal.style.display = "none";
    });
    function getWeather(city) {
        const apiKey = "5fbf228287a44fc5a1d9a627ec694eb4";
        const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = data.data[0];
                const cityName = weather.city_name;
                const temperature = weather.temp;
                const description = weather.weather.description;
                const windSpeed = weather.wind_spd;
                const humidity = weather.rh;
                weatherDetails.innerHTML = `
                    <h3>${cityName} Hava Şəraiti</h3>
                    <p>Temperatur: ${temperature}°C</p>
                    <p>Hava: ${description}</p>
                    <p>Külək sürəti: ${windSpeed} km/h</p>
                    <p>Nəmlik: ${humidity}%</p>
                `;
            })
            .catch(error => {
                weatherDetails.innerHTML = `<p>Hava məlumatı alınarkən xəta baş verdi.</p>`;
            });
    }
    getWeatherButton.addEventListener("click", function() {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        } else {
            weatherDetails.innerHTML = "<p>Şəhər adı daxil edin.</p>";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const weatherTrigger1 = document.getElementById("weatherTrigger1");
    const weatherModal = document.getElementById("weather-modal");
    const closeWeatherModal = document.getElementById("close-weather-modal");
    const getWeatherButton = document.getElementById("get-weather");
    const cityInput = document.getElementById("city-input");
    const weatherDetails = document.getElementById("weatherDetails");
    weatherTrigger1.addEventListener("click", function() {
        weatherModal.style.display = "block";
    });
    closeWeatherModal.addEventListener("click", function() {
        weatherModal.style.display = "none";
    });
    function getWeather(city) {
        const apiKey = "5fbf228287a44fc5a1d9a627ec694eb4";
        const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = data.data[0];
                const cityName = weather.city_name;
                const temperature = weather.temp;
                const description = weather.weather.description;
                const windSpeed = weather.wind_spd;
                const humidity = weather.rh;
                weatherDetails.innerHTML = `
                    <h3>${cityName} Hava Şəraiti</h3>
                    <p>Temperatur: ${temperature}°C</p>
                    <p>Hava: ${description}</p>
                    <p>Külək sürəti: ${windSpeed} km/h</p>
                    <p>Nəmlik: ${humidity}%</p>
                `;
            })
            .catch(error => {
                weatherDetails.innerHTML = `<p>Hava məlumatı alınarkən xəta baş verdi.</p>`;
            });
    }
    getWeatherButton.addEventListener("click", function() {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        } else {
            weatherDetails.innerHTML = "<p>Şəhər adı daxil edin.</p>";
        }
    });
});
