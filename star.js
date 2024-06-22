let container = document.querySelector(".opsiy")
let firstline = document.querySelector(".firstline")
let secondline = document.querySelector(".secondline")
let thirdline = document.querySelector(".thirdline")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")
let fourth = document.querySelector(".fourth")
let fightbutton = document.querySelector(".fighta")
let fightarea = document.querySelector(".fightarea")
let forsoldiers = document.querySelector(".forsoldiers")
let beatbutton = document.querySelector(".beata")
let yoursoldier = document.querySelector(".yoursoldier")
let enemyssoldier = document.querySelector(".enemyssoldier")
let yourname = document.querySelector(".yourname")
let enemysname = document.querySelector(".enemysname")
let yourpower = document.querySelector(".yourpower")
let enemyspower = document.querySelector(".enemyspower")
let yourhealth = document.querySelector(".yourhealth")
let enemyshealth = document.querySelector(".enemyshealth")
let yourname1 = document.querySelector(".yourname1")
let enemysname1 = document.querySelector(".enemysname1")
let yourpower1 = document.querySelector(".yourpower1")
let enemyspower1 = document.querySelector(".enemyspower1")
let yourhealth1 = document.querySelector(".yourhealth1")
let enemyshealth1 = document.querySelector(".enemyshealth1")
let usercan = document.querySelector(".uzlukuser")
let enemycan = document.querySelector(".uzlukenemy")
let can1 = 100
let can2 = 100

let userChoice = false
let enemyChoice = false
function userinfo(x) {
    yoursoldier.style.display = "block"
    yourname.innerText = x.dataset.name
    yourpower.innerText = x.dataset.power
    yourhealth.innerText = x.dataset.health
    yourname1.innerText = x.dataset.name
    yourpower1.innerText = x.dataset.power
    yourhealth1.innerText = can1
}
function enemysinfo(y) {
    enemyssoldier.style.display = "block"
    enemysname.innerText = y.dataset.name
    enemyspower.innerText = y.dataset.power
    enemyshealth.innerText = y.dataset.health
    enemysname1.innerText = y.dataset.name
    enemyspower1.innerText = y.dataset.power
    enemyshealth1.innerText = can2
}
first.onclick = function () {
    if (!userChoice) {
        secondline.append(second, third, fourth)
        userChoice = first
        userinfo(this)

    }
    else if (!enemyChoice && userChoice != first) {
        thirdline.append(first)
        enemyChoice = first
        enemysinfo(this)
    }
}
second.onclick = function () {
    if (!userChoice) {
        secondline.append(first, third, fourth)
        userChoice = second
        userinfo(this)
    }
    else if (!enemyChoice && userChoice != second) {
        thirdline.append(second)
        enemyChoice = second
        enemysinfo(this)
    }
}
third.onclick = function () {
    if (!userChoice) {
        secondline.append(second, first, fourth)
        userChoice = third
        userinfo(this)
    }
    else if (!enemyChoice && userChoice != third) {
        thirdline.append(third)
        enemyChoice = third
        enemysinfo(this)
    }

}
fourth.onclick = function () {
    if (!userChoice) {
        secondline.append(second, third, first)
        userChoice = fourth
        userinfo(this)
    }
    else if (!enemyChoice && userChoice != fourth) {
        thirdline.append(fourth)
        enemyChoice = fourth
        enemysinfo(this)
    }

}
fightbutton.onclick = function () {
    if (userChoice != false && enemyChoice != false) {
        container.style.display = "none"
        fightarea.style.display = "block"
        forsoldiers.append(userChoice)
        forsoldiers.append(enemyChoice)
    }
}
beatbutton.onclick = function () {
    can1 = parseInt(can1)
    can2 = parseInt(can2)
    can1 -= Math.floor(Math.random() * enemyChoice.dataset.power)
    can2 -= Math.floor(Math.random() * userChoice.dataset.power)
    usercan.style.width = `${can1}px`
    enemycan.style.width = `${can2}px`
    yourhealth1.innerText = can1
    enemyshealth1.innerText = can2
    if (can1 <= 0) {
        yourhealth1.innerText = 0
        usercan.style.display = "none"
        setTimeout(function () {
            alert("Teessufler olsun dusmen qazandi!")
            alert("yeniden baslamaq ucun toxunun")
            window.location.reload()
        }, 100)


    }
    else if (can2 < 0) {
        enemyshealth1.innerText = 0
        enemycan.style.display = "none"
        setTimeout(function () {
            alert("Teessufler olsun dusmen qazandi!")
            alert("yeniden baslamaq ucun toxunun")
            window.location.reload()
        }, 100)
    }

}