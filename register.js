document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const errorMessage = document.getElementById('error-message');
        if (username === '') {
            alert('İstifadəçi adı boş ola bilməz!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Şifrələr uyğun gəlmir!');
            return;
        }

        if (password.length < 6) {
            alert('Şifrə ən az 6 simvol olmalıdır!');
            return;
        }

        alert('Qeydiyyatınız uğurla tamamlandı!');
        window.location.href = "../index.html"; // Ana səhifəyə yönləndirmə
    });
});
// Lazım olan elementləri seçirik
const mapTrigger = document.getElementById("mapTrigger");
const modal = document.getElementById("map-modal");
const closeModal = document.getElementById("close-modal");

// "Rəqəmsal Xəritə" klik ediləndə modalı aç
mapTrigger.addEventListener("click", () => {
    modal.style.display = "block";
});

// Modalı bağlamaq üçün "x" düyməsi
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Modal pəncərənin kənarına klik edildikdə bağla
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
