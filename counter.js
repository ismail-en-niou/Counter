let btn = document.getElementById('btn')
let decrement = document.getElementById('decrement')
let reset = document.getElementById('reset')
let increment = document.getElementById('increment')
let xer = 0 ;

decrement.onclick = function(){
  xer--;
    btn.textContent= xer
}
increment.onclick = function(){
    xer++;
      btn.textContent= xer
  }
reset.onclick = function (){
    xer = 0
    btn.textContent = xer
}
