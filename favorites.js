document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage-dən favoritləri oxuyuruq
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favorites-container");

    // Əgər favorites array boşdursa, heç bir şey göstərməyək
    if (favorites.length === 0) {
        container.innerHTML = "";  // Heç bir məzmun göstərmə, səhifə tamamilə boş olacaq
    } else {
        favorites.forEach((favorite) => {
            if (favorite && favorite.html) {  // favorite.html yoxlanılır
                const div = document.createElement("div");
                div.classList.add("favorite-item");
                div.innerHTML = favorite.html;  // Əgər favorite.html varsa, onu təyin et

                // ❤️ düyməsini işlək vəziyyətə gətir
                const like1Button = div.querySelector(".like1");
                if (like1Button) {
                    like1Button.addEventListener("click", function () {
                        div.remove(); // Div-i səhifədən sil
                        const updatedFavorites = favorites.filter((item) => item.id !== favorite.id);
                        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // LocalStorage-i yenilə
                    });
                }

                container.appendChild(div);  // Div-i konteynıra əlavə et
            }
        });
    }
});
