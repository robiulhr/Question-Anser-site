// ---------------------------------------- big screen navigation dropdown --------------------------------------------

let menuitemDom = document.querySelectorAll("li[menu-item='clickable-hover']")
let submenuitemDom = document.querySelectorAll("li[menu-item='clickable-hover-2']")
let subMenu = document.querySelectorAll(".submenu")



menuitemDom.forEach((e) => {
    let showAndhidemenu = (nodeNum, displayProperty, isshowingValue) => {
        e.childNodes[nodeNum].style.display = displayProperty
        isshowing = isshowingValue
    }
    let isshowing = false
    e.addEventListener("click", () => {
        if (!isshowing) {
            showAndhidemenu(3, "block", true)
        } else {
            showAndhidemenu(3, "none", false)
        }
    })
    document.addEventListener("click", element => {
        console.log(element);
        if (!element.path.includes(e)) {
            showAndhidemenu(3, "none", false)
        }
        else if (element.path.includes(submenuitemDom[0])) {
            showAndhidemenu(3, "block", true)
        }
    })
})

submenuitemDom.forEach((e) => {
    let showAndhideSubmenu = (nodeNum, displayProperty, isshowingValue) => {
        e.childNodes[nodeNum].style.display = displayProperty
        isshowing2 = isshowingValue
    }
    let isshowing2 = false

    e.addEventListener("click", () => {
        if (!isshowing2) {
            showAndhideSubmenu(3, "block", true)
        } else {
            showAndhideSubmenu(3, "none", false)
        }
    })
    document.addEventListener("click", element => {
        if (!element.path.includes(e)) {
            showAndhideSubmenu(3, "none", false)
        }
    })
})

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
