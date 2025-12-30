function openMenu() {
document.getElementById("mobileMenu").classList.add("active");
document.getElementById("categoryMenu").style.display = "none";
}

function closeMenu() {
document.getElementById("mobileMenu").classList.remove("active");
closeSubMenu(); // reset submenu
}

function openSubMenu() {
document.getElementById("mainMenu").style.display = "none";
document.getElementById("categoryMenu").style.display = "block";
}

function closeSubMenu() {
document.getElementById("mainMenu").style.display = "block";
document.getElementById("categoryMenu").style.display = "none";
}