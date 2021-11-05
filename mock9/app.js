var inputText = document.querySelector("#input-mail");
var submitButton = document.querySelector("#button-click");
var displayOutput = document.querySelector("#display");

function clickHandler(){
    var validateGmail = "@gmail.com";
    var InputData = inputText.value;
    
    var isValdiate = InputData.includes(validateGmail);
    console.log(isValdiate);
    if( InputData.length > 10 && isValdiate === true ){
        displayOutput.innerText = "Success";
        displayOutput.style.color = "green";
    }else {
        displayOutput.innerText = "Fail";
        displayOutput.style.color = "red";
    }
}

submitButton.addEventListener("click", clickHandler);