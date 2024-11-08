const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const num3 = document.querySelector(".num3")
const num4 = document.querySelector(".num4")
const num5 = document.querySelector(".num5")
const num6 = document.querySelector(".num6")
const num7 = document.querySelector(".num7")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const bar4 = document.querySelector(".bar4")
const bar5 = document.querySelector(".bar5")
const bar6 = document.querySelector(".bar6")
const bar7 = document.querySelector(".bar7")


bar1.addEventListener("click", () => {
    num1.classList.remove("hidden")
    num7.classList.add("hidden")
})
bar2.addEventListener("click", () => {
    num1.classList.add("hidden")
    num2.classList.remove("hidden")
})
bar3.addEventListener("click", () => {
    num2.classList.add("hidden")
    num3.classList.remove("hidden")
})
bar4.addEventListener("click", () => {
    num3.classList.add("hidden")
    num4.classList.remove("hidden")
})
bar5.addEventListener("click", () => {
    num4.classList.add("hidden")
    num5.classList.remove("hidden")
})
bar6.addEventListener("click", () => {
    num5.classList.add("hidden")
    num6.classList.remove("hidden")
})
bar7.addEventListener("click", () => {
    num6.classList.add("hidden")
    num7.classList.remove("hidden")
})