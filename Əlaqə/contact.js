document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); 
        form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        alert("Mesajınız göndərildi!");
        form.reset();
                window.location.href = "../index.html";
    });
});
