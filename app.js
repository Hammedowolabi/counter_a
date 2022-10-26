
let heading = document.querySelector('h1')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')


function DECREASE() {
    heading.innerText--
    let body = document.body
    body.style.backgroundColor = 'yellow'
}

dec.addEventListener('click', DECREASE)


function INCREASE() {
    heading.innerText++
    let body = document.body
    body.style.backgroundColor = 'green'
}
inc.addEventListener('click', INCREASE)


function RESET() {
    heading.innerText = ('0')
    let body = document.body
    body.style.backgroundColor = 'red'
}
res.addEventListener('click', RESET)