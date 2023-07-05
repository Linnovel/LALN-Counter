// set initial count
let count = 0;

// selecionando values y botones
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

// agregando los eventlisteners a los botones

btns.forEach(function  (btn ) {
  btn.addEventListener('click', function(event) {
    const styles = event.currentTarget.classList;
    if(styles.contains('decrease')){
        count --;

    }
     else if(styles.contains('increase')) {
        count++;
     }
     else{
        count = 0;
     }
     if(count > 0) {
        value.style.color = "green";
     }
     if(count < 0){
        value.style.color = "red"
     }
     if(count === 0){
        value.style.color = "#222";
     }
    value.textContent = count;
  })  
})