function display_the_result(number) {
   const box = document.getElementById('outcome');
   box.innerHTML="";
   const lucky = document.createElement('div');lucky.textContent = 'You guessed it!';
   const unlucky = document.createElement('div');unlucky.textContent = "You didn't guess it!";
   let random = Math.floor(Math.random() * 3);
   if(number == random) {
      box.appendChild(lucky);
   }else{
      box.appendChild(unlucky)
   }
   document.getElementById("button_1").disabled = true;
   document.getElementById("button_2").disabled = true;
   document.getElementById("button_3").disabled = true;
   document.getElementById("again").disabled = false;
}

function reset_buttons () {

   document.getElementById("button_1").disabled = false;
   document.getElementById("button_2").disabled = false;
   document.getElementById("button_3").disabled = false;
   document.getElementById("again").disabled = true;
   const box = document.getElementById('outcome');
   box.innerHTML="";
}