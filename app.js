let headerLine = document.querySelector('.header-line');

window.onscroll = () =>{
    let pos = window.scrollY - 4000;
    headerLine.style.left = `${pos}px`
    console.log(pos + 4472);
    //let poxX = event.pageX
    //console.log(poxX)
}

var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
}
setInterval(pointerCheck, 1000);
function pointerCheck() {
    console.log('Cursor at: '+pointerX+', '+pointerY);
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplays) => {
   let startValue = 0;
   let endValue = parseInt(valueDisplays.getAttribute("data-val"));
   let duration = Math.floor(interval/endValue);

   if(endValue > 40000) {
       startValue = 40300;
   }

   let counter = setInterval(function (){
       startValue += 1;
       valueDisplays.textContent = startValue;
       if(startValue === endValue) {
           clearInterval(counter);
       }
   }, duration);
});


