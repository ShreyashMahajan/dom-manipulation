var inputText = document.querySelector("#input-text");
var buttonSubmit = document.querySelector("#button-submit");
var display = document.querySelector("#display");


function clickHandler() {
    var password = inputText.value;
  if( password.length > 10) {
      display.innerHTML = "success"
      display.style.color = "green";
     
  }else {
      display.innerHTML = "Fail";
      display.style.color = "red";

  }
}

function inputClickHandler(){
    var password = inputText.value;
    console.log(password);
    if(password.length > 10){
        buttonSubmit.disabled = false; 
        console.log("greater than 10");
    }else {
       
        console.log("less than 10");
    }
}

buttonSubmit.addEventListener("click", clickHandler);
inputText.addEventListener("input" , inputClickHandler )

