var inputText = document.querySelector("#input-text");
var buttonHeaders = document.querySelectorAll(".buttonHeading");
var outputDisplay = document.querySelector("#output");

function clickHandler(heading){
    if(heading === "H1"){
       outputDisplay.innerHTML = `<h1> ${inputText.value} </h1>`
    }
}

buttonHeaders.forEach(button => { 
    button.addEventListener("click", (e) => {
        clickHandler(e.target.innerText);
    })
})
