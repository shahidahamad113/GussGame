var colors= [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var square=document.querySelectorAll(".square");
var pickedColor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

colorDisplay.textContent=pickedColor;
for(var i=0;i<square.length;i++){
   square[i].style.background=colors[i];
   square[i].addEventListener("click",function(){
       var clickedColor=this.style.background;
       if(clickedColor===pickedColor){
          messageDisplay.textContent="correct";
          changeColors(clickedColor);
       }
       else {
           this.style.background="#232323";
           messageDisplay.textContent="Try Again";
       }
   });
}
function changeColors(color){
   for(var i=0;i<square.length;i++){
       square[i].style.background=color;
   }
}
