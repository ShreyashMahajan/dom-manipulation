var inputText = document.querySelector("#input-btn");
var buttonClick = document.querySelector("#button-click");
var output = document.querySelector("#display");

function clickHandler(){
    if( inputText.value.length > 10){
        output.innerHTML = "success";
        output.style.color = "green";
      
    }else {
        output.innerHTML = "Fail";
        output.style.color = "red";
        inputText.disabled = true;
    }

   
}

buttonClick.addEventListener("click", clickHandler);

