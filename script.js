let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(e.target === red){
            body.style.backgroundColor = "red";
        }
        if(e.target === blue){
            body.style.backgroundColor = "blue";
        }
        if(e.target === green){
            body.style.backgroundColor = "green";
        }
        if(e.target === yellow){
            body.style.backgroundColor = "yellow";
        }
    })
});