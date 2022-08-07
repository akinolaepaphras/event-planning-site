const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open")
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open")
  })
})

const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
  btn.addEventListener("click", function() {
    btn.parentNode.classList.toggle("active") 
  })
})

