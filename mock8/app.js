var inputOne = document.querySelector("#inputOne");
var inputTwo = document.querySelector("#inputTwo");
var buttonSubmit = document.querySelector("#button-submit");
var display = document.querySelector("#display");

var point;

function clickHandler(){

    var inputValueOne = Number(inputOne.value);
    var inputValueTwo = Number(inputTwo.value);
    if( inputValueOne > inputValueTwo){
      point = inputValueOne - inputValueTwo;
      display.innerHTML = "Success and loss is " + point;
      display.style.color = "red";
    }else {
        point = inputValueTwo - inputValueOne ;
        display.innerHTML = "Success and profit is " + point;
        display.style.color = "green";
    }
}

buttonSubmit.addEventListener("click", clickHandler);