let counter = 0
let buttonCounter = document.querySelector(".counter")
let display = document.querySelector(".buttonState")
const updateDisplay = () => {
    display.innerHTML = counter.toString()
}
updateDisplay()
buttonCounter.addEventListener("click", () => {
    counter++
    console.log(counter)
    updateDisplay()
})