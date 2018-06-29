
// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
//Variable reference to URL
var y = location.href;

//Function for timer using duration and display as the passing parameters
function startTimer(duration, display) {
	//Variable timer displays the current duration in minutes and seconds
    var timer = duration, minutes, seconds;
	  //Variable sets the interval function
      var x = setInterval(function () {
	  	//Variable minutes is counting down
        minutes = parseInt(timer / 60, 10);
		//Variable seconds is counting down
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		//Displays the current time
        display.textContent = minutes + ":" + seconds;
		
		//If loop used to check if time is up
        if (--timer < 0) {
            timer = duration;
			clearInterval(x);
			//Pops up an alert message to user that time is up
			alert("Sorry, your time to complete the form has expired. Please try again if you still wish to purchase tickets.");
			//Redirects the user back to URL
			window.location.href = y;
        }
    }, 1000);
}
//Starts timer on webpage load
window.onload = function () {
    var tenMinutes = 60 * 10;
	 display = document.querySelector('#timer');
	   startTimer(tenMinutes, display);
	   
};


//Function to calculate the total of tickets 
function calculateTotal() {
		msgError = document.querySelector('#msgTickets');
		var numOfTickets = document.getElementById("numTickets").value;
		var input = document.getElementById("numTickets");
		var contact = document.getElementById("contactInformation");
		//Check if the number of tickets entered is a number and between 1-3
		if (isNaN(numOfTickets) || numOfTickets < minTickets || numOfTickets > maxTickets) {
		    //Changes the background color to yellow of input of tickets
		   	input.style.backgroundColor = "yellow";	
			//Displays to the user the error message				
			msgError.textContent = "You can only buy between 1 and 3 tickets.";
			contact.style.display = "none";
			return false;
			}
			//Clears the error message 
			msgError.textContent = "";
			//Variable for the calculated total of tickets
		   	var total = costPerTicket * numOfTickets + ticketSurcharge;
			//Converts the total to decimal with 2 spaces
			var t = total.toFixed(2);
			//Show the contact information
			contact.style.display = "block";
			//Clear the background of the input
			input.style.backgroundColor = "white";
			//Display the total cost
		document.getElementById("totalCost").value = "$" + t;
}

//Function for complete purchase validation
function completePurchase(){
		 errorName = document.querySelector('#msgname');
		 errorEmail = document.querySelector('#msgemail');
		 
		 var nameInput = document.getElementById("name");
		 var emailInput = document.getElementById("email");
		 
		 var totalCost = document.getElementById("totalCost").value;
		 //Check if value is entered in name and email input
		 if(nameInput.value == "" || emailInput.value == ""){
		 	//Error message
			errorName.textContent = "Please enter your name.";
			errorEmail.textContent = "Please enter your email address.";
			//Error background color
			nameInput.style.backgroundColor = "yellow";
			emailInput.style.backgroundColor = "yellow";
		 		  		 
		 
		 } else { 
		 //Pops up a confirmation of purchase message box
		 alert("Thank you for your purchase. Your total cost is "+totalCost+". Please allow 24 hours for electronic delivery");
		 }
}