const hw_1 = document.getElementsByClassName('hw-1')[0]
const hw_2 = document.getElementsByClassName('hw-2')[0]
console.log(hw_1, hw_2)


hw_1.addEventListener("click", () => {
    hw_2.style.color = "red"
    hw_1.style.color = "black"
})

hw_2.addEventListener("click", () => {
    hw_1.style.color = "red"
    hw_2.style.color = "black"
})
