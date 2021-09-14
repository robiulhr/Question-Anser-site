// ------------------------------------- small screen navigation--------------------------------

const fullBody = document.querySelector("body")
const navMenu = document.getElementById("nav-menu")
const fullpagemenu = document.getElementById("full-page-menu")
const myNav = document.getElementById("myNav")
const closenavmenu = document.getElementById("close-nav-menu")

let isopenNavmenu = false

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle('opened');
    navMenu.setAttribute('aria-expanded', navMenu.classList.contains('opened'))
    if (isopenNavmenu) {
        myNav.style.width = "0%";
        isopenNavmenu = false
    } else {

        myNav.style.width = "100%";
        fullBody.style.overflow = "hidden"
        isopenNavmenu = true
    }
})

closenavmenu.addEventListener("click", () => {
    myNav.style.width = "0%";
    fullBody.style.overflow = "scroll"
    isopenNavmenu = false;
    navMenu.classList.toggle('opened');
    navMenu.setAttribute('aria-expanded', navMenu.classList.contains('opened'))
})





//----------------------------------------------------------small screen submenu---------------------------------------
var dropdown = document.getElementsByClassName("dropdown-btn");

var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
//----------------------------------------------------------small screen mega menu---------------------------------------


var megamenu = document.getElementById("mega-menu-button")

megamenu.addEventListener("click", () => {

    megamenu.classList.toggle("active");
    var dropdownContent = megamenu.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
})