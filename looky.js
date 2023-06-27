// delay of 8 seconds to let the typewriter's element to disappear, to ensure the eyes are looking correctly.

// console.log(window.location.href.slice(-9))
// if (window.location.href.slice(-9) === 'home.html'){
//     snore = 0;
//     console.log('nosleep');
// }else{
//     snore = 8000;
//     console.log('sleep');
// }

// setTimeout(function(){},snore)

let eyes = document.querySelectorAll(".eye");
// console.log('eyes')
// console.log(eyes)

let eyeRect = eyes[0].getBoundingClientRect();
// console.log('eye rect')
// console.log(eyeRect)
let container = document.querySelector(".eyesContainer");
let containerRect = container.getBoundingClientRect();

window.addEventListener("resize", updatePosition, false);

function updatePosition(e) {
    eyeRect = eyes[0].getBoundingClientRect();
    containerRect = container.getBoundingClientRect();
}

document.body.addEventListener("mousemove", eyesFollow, false);

function eyesFollow(e) {
    requestAnimationFrame(() => {
    let xPos = e.pageX;
    let yPos = e.pageY;
    // console.log('x and y position is')
    // console.log(xPos, yPos)
    let xDiff = (eyeRect.x + eyeRect.width / 2) - xPos;
    let yDiff = (eyeRect.y + eyeRect.height / 2) - yPos;
    // console.log('xy Diff is')
    // console.log(xDiff, yDiff)
    let angle = (Math.atan2(yDiff, xDiff) * 180 / Math.PI) - 180;

    container.style.setProperty("--eyeAngle", angle.toFixed(2) + "deg");

    let mouseXRelativetoContainer = xPos - containerRect.x - containerRect.width / 2;
    let mouseYRelativetoContainer = yPos - containerRect.y - containerRect.height / 2;

    let containerXAngle = 60 * (mouseXRelativetoContainer / window.innerWidth);
    let containerYAngle = -1 * 60 * (mouseYRelativetoContainer / window.innerHeight);

    container.style.setProperty("--xAngle", containerXAngle.toFixed(2) + "deg");
    container.style.setProperty("--yAngle", containerYAngle.toFixed(2) + "deg");
    });
}

