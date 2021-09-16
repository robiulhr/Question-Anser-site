let togglebtn = document.querySelector(".toggle")
let closeBtn = document.querySelector(".close")
let container = document.querySelector(".container")
let cardmain = document.querySelector("#card-main")

togglebtn.addEventListener("click", () => {
    container.classList.add("active")
    cardmain.classList.add("card-main")
})
closeBtn.addEventListener("click", () => {
    container.classList.remove("active")
    cardmain.classList.remove("card-main")

})
