// Your code goes here:

let button = document.querySelector("#race");
let pika = document.querySelector(".pika");
let sonic = document.querySelector(".sonic");

button.onclick = function(event) {
    event.preventDefault();

    pika.style.animation = "right";
    pika.style.animationDuration = randomNum(35) + "s";

    sonic.style.animation = "right";
    sonic.style.animationDuration = randomNum(35) + "s";
}

function randomNum(speed) {
    let ranDec = Math.random();
    let ranNum = ranDec * speed;
    let ranInt = Math.floor(ranNum)

    return ranInt;
}