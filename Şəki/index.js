


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Axtarış üçün nümunə məlumatlar
    const data = [
        { name: "Bakı", url: "../baku/" },
        { name: "Naxçıvan", url: "../Nakchvan/" },
        { name: "Qəbələ", url: "../gabala/" },
        { name: "Quba", url: "../Quba/" },
        { name: "Qusar", url: "../Qusar/" },
        { name: "İsmayıllı", url: "../İsmayillı/" },
        { name: "Şəki", url: "seki.html" },
        { name: "Şamaxı", url: "samaxi.html" },
        { name: "Xızı", url: "xizi.html" },
        { name: "Göygöl", url: "goygol.html" },
        { name: "Qax", url: "qax.html" },
        { name: "Zaqatala", url: "zaqatala.html" },
        { name: "Lənkəran", url: "lenkeran.html" },
        { name: "Lerik", url: "lerik.html" },
        { name: "Qarabağ", url: "qarabag.html" }
    ];

    // Axtarış qutusunda dəyişiklikləri izləyin
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

                    // Nəticəyə klik edildikdə inputu təmizləyin
                    resultItem.addEventListener("click", () => {
                        searchInput.value = ""; // Input sahəsini təmizləyir
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

    // Sayfadan kənara klik edildikdə nəticələri gizləyin və inputu təmizləyin
    document.addEventListener("click", (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = "none";
            searchInput.value = ""; // Input sahəsini təmizləyir
        }
    });
});


// Xəritəni tərtib etmək üçün funksiya
function initializeMap() {
    const map = L.map('mapContainer').setView([40.4093, 49.8671], 10); // Bakı koordinatları

    // Xəritə təbəqəsi
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}

let mapModal = document.getElementById('map-modal');
let mapContainer = document.getElementById('mapContainer');
// Rəqəmsal xəritə klik hadisəsi
document.getElementById('mapTrigger').addEventListener('click', function () {
    mapModal.style.display = 'block';
    mapContainer.style.display = 'block'; // Xəritə konteynerini göstər
    initializeMap(); // Xəritəni tərtib et
});

document.getElementById('close-modal').addEventListener('click', function () {

    mapModal.style.display = 'none';
    mapContainer.style.display = 'none'; // Xəritə konteynerini gizlət
});

window.addEventListener('click', function (event) {
    const mapModal = document.getElementById('map-modal');

    if (event.target === mapModal) {
        mapModal.style.display = 'none'; // Modalı bağla
        const mapContainer = document.getElementById('mapContainer');
        mapContainer.style.display = 'none'; // Xəritə konteynerini gizlət
    }
});


document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Clicked on: ', e.target.href); // Linki konsolda göstər
    });
});


