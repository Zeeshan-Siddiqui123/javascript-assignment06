document.getElementById("click").addEventListener("click", function(){
alert("Button is Clicked")
}) 


const divElement= document.getElementById("hover");


divElement.addEventListener("mouseover", function(){
divElement.style.backgroundColor = ("lightgreen")
})

divElement.addEventListener("mouseout", function(){
    divElement.style.backgroundColor = ("lightblue")
    })

    