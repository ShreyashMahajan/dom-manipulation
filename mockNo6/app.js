var buttonChange = document.querySelector("#button-click");

var color ="black" ;

function clickHandler(){
    if( color === "black"){
        color = "white";
    }else {
        color = "black";
    }
    document.body.style.backgroundColor = color;
}

buttonChange.addEventListener("click", clickHandler)

