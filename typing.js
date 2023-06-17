// let i = 0;
// let text = "Welcome to photopia, stay awhile!";
// // let curText = document.getElementById("typing-effect").innerHTML;

// console.log('curText is')

// function typeWriter() {
//   if (i < text.length) {
//     document.getElementById("typing-effect").innerHTML += text[i];
//     i++;
//     setTimeout(typeWriter, 110);
//   }
// }


let text = "Greetings! Welcome to my personal website.";

async function typeWriter() {
    let snore = 2000
    let delay = 60;
    typing_effect = document.getElementById("typing-effect");
    typing_container = document.getElementById("typing-container");
    clicky = document.getElementById("clicky");
    ifooter = document.getElementById("ifooter");

    for (let i = 0; i < text.length; i++){
        typing_effect.innerHTML += text[i];
        await new Promise(r => setTimeout(r, delay));
    }

    await new Promise(r => setTimeout(r, snore));
    
    typing_container.style.maxHeight = 0; 
    await new Promise(r => setTimeout(r, snore));
    typing_container.remove()

    clicky.style.maxHeight = "1000px"; 
    await new Promise(r => setTimeout(r, snore));
    ifooter.style.maxHeight = "100px"
  // await new Promise(r => setTimeout(r, 2000));
}

