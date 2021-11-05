var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var displayText = document.querySelector("#display");

var bestPlace = {
    place1 : "Indore",
    place2 : "Delhi",
    place3 : "Mumbai"
};

var bestFood = {
    food1 : "Momos",
    food2 : "panipuri",
    food3 : "samosa"
};



function clickHandlerOne(){

    displayText.innerHTML = `<ul>
     <li> ${bestPlace.place1}</li>  
     <li> ${bestPlace.place2}</li>  
     <li> ${bestPlace.place3}</li>  
    
    </ul>`

    
}

function clickHandlerTwo(){

    displayText.innerHTML = `<ul>
    <li> ${bestFood.food1}</li>  
    <li> ${bestFood.food2}</li>  
    <li> ${bestFood.food3}</li>  
   
   </ul>`
    
}


buttonOne.addEventListener("click", clickHandlerOne);
buttonTwo.addEventListener("click", clickHandlerTwo);