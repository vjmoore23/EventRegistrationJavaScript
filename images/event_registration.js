
// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

var y = location.href;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
      var x = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
		
		
        if (--timer < 0) {
            timer = duration;
			clearInterval(x);
			
			alert("Sorry, your time to complete the form has expired. Please try again if you still wish to purchase tickets.");
			window.location.href = y;
        }
    }, 1000);
}

window.onload = function () {
    var tenMinutes = 60 * 10;
	 display = document.querySelector('#timer');
	   startTimer(tenMinutes, display);
	   
};


 
function calculateTotal() {
		msgError = document.querySelector('#msgTickets');
		var numOfTickets = document.getElementById("numTickets").value;
		var input = document.getElementById("numTickets");
		var contact = document.getElementById("contactInformation");
		
		if (isNaN(numOfTickets) || numOfTickets < minTickets || numOfTickets > maxTickets) {
		   	input.style.backgroundColor = "yellow";					
			msgError.textContent = "You can only buy between 1 and 3 tickets.";
			contact.style.display = "none";
			return false;
			} 
			msgError.textContent = "";
		   	var total = costPerTicket * numOfTickets + ticketSurcharge;
			var t = total.toFixed(2);
			contact.style.display = "block";
			input.style.backgroundColor = "white";
		document.getElementById("totalCost").value = "$" + t;
}


function completePurchase(){
		 errorName = document.querySelector('#msgname');
		 errorEmail = document.querySelector('#msgemail');
		 
		 var nameInput = document.getElementById("name");
		 var emailInput = document.getElementById("email");
		 
		 var totalCost = document.getElementById("totalCost").value;
		 
		 if(nameInput.value == "" || emailInput.value == ""){
		 	
			errorName.textContent = "Please enter your name.";
			errorEmail.textContent = "Please enter your email address.";
			
			nameInput.style.backgroundColor = "yellow";
			emailInput.style.backgroundColor = "yellow";
		 		  		 
		 
		 } else { 
		 alert("Thank you for your purchase. Your total cost is "+totalCost+". Please allow 24 hours for electronic delivery");
		 }
}