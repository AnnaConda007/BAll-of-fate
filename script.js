let newelement = document.querySelector("p");
let butt = document.querySelector(".shake");
newelement.innerHTML = "кликните по мне"

butt.addEventListener("mousedown", function () {
    newelement.innerHTML = "...?"
})
butt.addEventListener("mouseup", function () {
    let random = Math.round(Math.random() * (7 - 1) + 1)
    if (random === 1) { newelement.innerHTML = "да" }
    if (random === 2) { newelement.innerHTML = "нет" }
    if (random === 3) { newelement.innerHTML = "давай!!" }
    if (random === 4) { newelement.innerHTML = "я за !!!" }
    if (random === 5) { newelement.innerHTML = "в другой раз" }
    if (random === 6) { newelement.innerHTML = "все получится" }
    if (random === 7) { newelement.innerHTML = "а как иначе" }


})
