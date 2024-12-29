// Gestion du mode sombre
var icon = document.getElementById("icon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
};
