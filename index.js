let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let imageContainer = document.querySelector(".section2-images");

// Funksiya, ekran ölçüsünə əsasən doğru sürüşmə miqdarını qaytarır
function getScrollAmount() {
    const divWidth = document.querySelector('.section2-images div').offsetWidth;
    const screenWidth = window.innerWidth;

    // Telefon ölçüsündə bir divin genişliyi
    if (screenWidth <= 400) {
        return divWidth; // Telefon üçün bir divin genişliyini qaytarırıq
    } else {
        return divWidth; // Böyük ekranlar üçün də bir divin genişliyini qaytarırıq
    }
}

// Sol və sağ düymələrə klik hadisələri
leftButton.addEventListener("click", () => {
    imageContainer.scrollBy({
        left: -getScrollAmount(), // Bir div qədər sola sürüşdür
        behavior: "smooth", // Hamarlama
    });
});

rightButton.addEventListener("click", () => {
    imageContainer.scrollBy({
        left: getScrollAmount(), // Bir div qədər sağa sürüşdür
        behavior: "smooth", // Hamarlama
    });
});

// Ekran ölçüsü dəyişdikdə də yenilənir
window.addEventListener("resize", () => {
    console.log(`Yeni sürüşmə məsafəsi: ${getScrollAmount()}px`);
});



document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage-dən favoritləri oxuyuruq
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favorites-container");

    if (favorites.length === 0) {
        container.innerHTML = "<p>Favoritlər yoxdur.</p>";
    } else {
        favorites.forEach((favorite) => {
            const div = document.createElement("div");
            div.classList.add("favorite-item");

            // favorite.html yoxlamaq
            if (favorite && favorite.html) {
                div.innerHTML = favorite.html;  // Əgər favorite.html varsa, onu təyin et
            } else {
                div.innerHTML = "<p>Favorit tapılmadı</p>";  // Əks halda fallback mətnini göstər
            }

            // ❤️ düyməsini işlək vəziyyətə gətir
            const like1Button = div.querySelector(".like1");
            if (like1Button) {
                like1Button.addEventListener("click", function () {
                    div.remove(); // Div-i səhifədən sil
                    const updatedFavorites = favorites.filter((item) => item.id !== favorite.id);
                    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // LocalStorage-i yenilə
                });
            }

            container.appendChild(div);
        });
    }
});


// Beyənilən divləri saxlamaq üçün array
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Seçimlər üçün dəyişənlər
document.addEventListener("DOMContentLoaded", function () {
    // Favoritləri bərpa et
    favorites.forEach((favorite) => {
        document.querySelectorAll("div[data-id]").forEach((div) => {
            // div.outerHTML ilə yoxlama əvəzinə id və ya başqa uyğun unikal identifikatoru istifadə et
            if (div.dataset.id === favorite.id) {
                const likeButton = div.querySelector(".like");
                const like1Button = div.querySelector(".like1");

                if (likeButton && like1Button) {
                    likeButton.style.display = "none"; // 🤍 düyməsini gizlət
                    like1Button.style.display = "inline-block"; // ❤️ düyməsini göstər
                }
            }
        });
    });

    // Ana səhifənin scroll vəziyyətini bərpa et
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});

// 🤍 düyməsini işlət
document.querySelectorAll(".like").forEach((likeButton) => {
    likeButton.addEventListener("click", function () {
        this.style.display = "none"; // 🤍 düyməsini gizlət
        this.nextElementSibling.style.display = "inline-block"; // ❤️ düyməsini göstər

        const parentDiv = this.closest("div");
        const favoriteData = {
            id: parentDiv.dataset.id, // Unikal id
            html: parentDiv.outerHTML || '' // Əgər outerHTML undefined-dirsə, boş string istifadə et
        };

        if (!favorites.find(fav => fav.id === favoriteData.id)) {
            favorites.push(favoriteData);
            localStorage.setItem("favorites", JSON.stringify(favorites)); // LocalStorage-a yaz
        }
    });
});

// ❤️ düyməsini işlət
document.querySelectorAll(".like1").forEach((like1Button) => {
    like1Button.addEventListener("click", function () {
        this.style.display = "none"; // ❤️ düyməsini gizlət
        this.previousElementSibling.style.display = "inline-block"; // 🤍 düyməsini göstər

        const parentDiv = this.closest("div");
        favorites = favorites.filter((favorite) => favorite.id !== parentDiv.dataset.id);
        localStorage.setItem("favorites", JSON.stringify(favorites)); // LocalStorage-a yaz
    });
});

// Ürək ikonuna klik edəndə bəyəndikləri başqa səhifəyə göndər
document.getElementById("favorite-icon").addEventListener("click", function () {
    sessionStorage.setItem("scrollPosition", window.scrollY); // Səhifənin scroll vəziyyətini yadda saxla
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Bəyəndikləri localStorage-a saxla
    window.location.href = "favorites.html"; // Başqa səhifəyə yönləndir
});



document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Axtarış üçün nümunə məlumatlar
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
    const map = L.map('mapContainer').setView([40.1431, 47.5769], 6); // Azərbaycanın mərkəz koordinatları və zoom səviyyəsi

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
document.getElementById('mapTrigger1').addEventListener('click', function () {
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
 




document.getElementById('districtLink').addEventListener('click', function (e) {
    const district = document.querySelector('.district');
    e.preventDefault();  // Səhifənin yenilənməsinin qarşısını alır

    // Rayonlar seçildikdə district hissəsini göstər və ya gizlət
    if (district.style.display === 'none' || district.style.display === '') {
        district.style.display = 'block';  // Districti göstər
    } else {
        district.style.display = 'none';  // Districti gizlət
    }
});
document.addEventListener('click', function (e) {
    const district = document.querySelector('.district');
    const districtLink = document.getElementById('districtLink');

    // Əgər klik edilən yer district və ya districtLink deyilsə, districti gizlət
    if (!district.contains(e.target) && e.target !== districtLink) {
        district.style.display = 'none';  // Districti gizlət
    }
});



// Burger ikonuna klik edildikdə menyunu açıb-bağla
document.querySelector(".burger").addEventListener("click", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.toggle("active"); // "active" sinfini əlavə edib silir
});

// Səhifədəki digər hissəyə klik edildikdə burger menyunu bağla
document.addEventListener("click", function (e) {
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerIcon = document.querySelector(".burger");
    
    if (!burgerMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
        burgerMenu.classList.remove("active");
    }
});


document.querySelector(".user-icon").addEventListener("click", function () {
    window.location.href = "register.html"; // Qeydiyyat səhifəsinin yolunu təyin edin
});


document.getElementById('districtLink1').addEventListener('click', function (e) {
    const district1 = document.querySelector('.district1');
    e.preventDefault(); // Səhifənin yenilənməsinin qarşısını alır

    // Rayonlar seçildikdə district1 hissəsini göstər və ya gizlət
    if (district1.style.display === 'none' || district1.style.display === '') {
        district1.style.display = 'block'; // District1-i göstər
    } else {
        district1.style.display = 'none'; // District1-i gizlət
    }
});

// Səhifənin digər yerlərinə klik hadisəsi
document.addEventListener('click', function (e) {
    const district1 = document.querySelector('.district1');
    const districtLink1 = document.getElementById('districtLink1');

    // Əgər klik edilən yer district1 və ya districtLink1 deyilsə, district1-i gizlət
    if (!district1.contains(e.target) && e.target !== districtLink1) {
        district1.style.display = 'none'; // District1-i gizlət
    }
});



// Bütün keçidlərə event listener əlavə edirik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Keçidin standart işini ləğv edir

        // Kliklənən elementin href atributundakı #id ilə uyğun olan elementi tapır
        const targetId = this.getAttribute('href').substring(1);  // #id-dən # işarəsini çıxarır
        const targetElement = document.getElementById(targetId);

        // Elementə smooth scroll ilə keçid edirik
        targetElement.scrollIntoView({
            behavior: 'smooth',  // Keçidi yumşaq etmək
            block: 'start'  // Elementin üst hissəsini ekranın yuxarısına yerləşdirmək
        });
    });
});



// JavaScript ilə scroll funksiyası
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Səhifə aşağıya endikdə oxu göstərmək
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {  // 300 piksel aşağı endikdə oxu göstər
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";  // Səhifə yuxarı olduqda oxu gizlət
        }
    });

    // Oxu kliklədikdə səhifəni yuxarı sürüşdür
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,    // Səhifənin yuxarı hissəsinə
            behavior: 'smooth'  // Yumşaq keçid (smooth scroll)
        });
    });
});
