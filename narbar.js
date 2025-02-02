function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("active");
    }
}

function logout() {
    alert("คุณได้ออกจากระบบแล้ว!");
    window.location.href = "index.html";
}

document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var button = document.querySelector(".menu-btn");
    if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
    }
});
