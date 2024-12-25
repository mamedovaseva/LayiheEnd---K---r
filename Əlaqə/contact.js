document.addEventListener("DOMContentLoaded", function() {
    // Formu tapırıq
    const form = document.querySelector("form");  // Burada formu ID və ya class ilə seçə bilərsiniz
    
    // Formun submit hadisəsini dinləyirik
    form.addEventListener("submit", function(e) {
        e.preventDefault();  // Formun avtomatik göndərilməsinin qarşısını alır
        
        // Formda daxil edilən məlumatları əldə edirik (bu mərhələ istəyə bağlıdır)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Xəbərdarlıq mesajı
        alert("Mesajınız göndərildi!");  // Bu mesajı göstərir
        
        // Formu təmizləyirik (istəyə bağlı)
        form.reset();
        
        // Ana səhifəyə yönləndirmə
        window.location.href = "../index.html";  // Ana səhifəyə yönləndirir
    });
});
