document.addEventListener("DOMContentLoaded", () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favorites-container");
    if (favorites.length === 0) {
        container.innerHTML = "";  
    } else {
        favorites.forEach((favorite) => {
            if (favorite && favorite.html) {  
                const div = document.createElement("div");
                div.classList.add("favorite-item");
                div.innerHTML = favorite.html; 
                const like1Button = div.querySelector(".like1");
                if (like1Button) {
                    like1Button.addEventListener("click", function () {
                        div.remove();
                        const updatedFavorites = favorites.filter((item) => item.id !== favorite.id);
                        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
                    });
                }
                container.appendChild(div);  
            }
        });
    }
});
