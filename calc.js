
// NOTE TO READER: "let" is used in place of "var" because it is a better practice for a javascript user.

// troubleshooting: linking to the innerHTML doc
function testButton(){
	// document.getElementById("submitButton").innerHTML;
	alert("DIDN'T YOU SEE THE LINE THAT SAID DO NOT PUSH THIS BUTTON??");
	alert("You are NOW TRAPPED FOREVER");
	alert("In this MESS of alert windows!");
	alert("MWahahahaah!");
	alert("Ahhhh, just kidding!"); 
	alert("Have a nice day!");
	alert("Bye bye!");
	window.close();
	// teehee ^_^
}
// Assigning a numerical value to the lettered grade w/ switch statement
function letterToNumber(LetterGrade) {
	let NumberGrade = 0;
	switch(LetterGrade) {
		case "A":
			console.log("This is an A");
			NumberGrade = 4;
			break;
		case "B":
			console.log("This is a B");
			NumberGrade = 3;
			break;
		case "C":
			console.log("This is a C");
			NumberGrade = 2;
			break;
		case "D":
			console.log("This is a D");
			NumberGrade = 1;
			break;
		default:
			NumberGrade = 0;
			break;
	}
	return NumberGrade;
}

// calculation function for the submit button
function calculate(){

	// first get all the values the user selected
	let LetterGrade1 = document.getElementById('Grade1').value;
	let LetterGrade2 = document.getElementById('Grade2').value;
	let LetterGrade3 = document.getElementById('Grade3').value;
	let LetterGrade4 = document.getElementById('Grade4').value;
		
	// make sure these variables exist with valid values so we can use them later
	let NumberGrade1 = 0;
	let NumberGrade2 = 0;
	let NumberGrade3 = 0;
	let NumberGrade4 = 0;
	
// Validation code to make sure you picked a proper letter for your grade. 
// Translation. IF LetterGrade is EQUAL TO "A" OR "B" OR "C" OR "C" OR "F"
// THEN run the calculate function and begin converting letter to number
// ELSE it will throw an alert that nothing or the wrong thing was picked.

	if (LetterGrade1 == "A"||LetterGrade1 == "B"||LetterGrade1 == "C"||LetterGrade1 == "D"||LetterGrade1 == "F") {
		// If it's a proper selection, convert the letter to a number :)
		NumberGrade1 = letterToNumber(LetterGrade1);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		alert("Enter a valid grade for Grade 1! :(");
	}
	if (LetterGrade2 == "A"||LetterGrade2 == "B"||LetterGrade2 == "C"||LetterGrade2 == "D"||LetterGrade2 == "F") {
		// If it's a proper selection, convert the letter to a number :)
		NumberGrade2 = letterToNumber(LetterGrade2);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		alert("Enter a valid grade for Grade 2! :(");
	}
	if (LetterGrade3 == "A"||LetterGrade3 == "B"||LetterGrade3 == "C"||LetterGrade3 == "D"||LetterGrade3 == "F") {
		// If it's a proper selection, convert the letter to a number :)
		NumberGrade3 = letterToNumber(LetterGrade3);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		alert("Enter a valid grade for Grade 3! :(");
	}
	if (LetterGrade4 == "A"||LetterGrade4 == "B"||LetterGrade4 == "C"||LetterGrade4 == "D"||LetterGrade4 == "F") {
		// If it's a proper selection, convert the letter to a number :)
		NumberGrade4 = letterToNumber(LetterGrade4);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		alert("Enter a valid grade for Grade 4! :(");
	}

	let TotalGPA = (NumberGrade1 + NumberGrade2 + NumberGrade3 + NumberGrade4) / 4;
	// troubleshooting for calculation in compiler
	// console.log(TotalGPA);
	let extraBonus = "";
	if (TotalGPA == 4) {
		extraBonus = " Excellent work!! You so smart!";
	}
	// Window to alert that the GPA IS -THIS- with a little bonus
	alert("Your GPA is " + TotalGPA + ". " + extraBonus);
}


	/* This is the validation code for the check boxes that I had to scrap T-T RIP
	// this variable is to keep track of whether one of the values was not picked..
	let notPicked = false;

	// Check whether a letter grade was selected
	if (LetterGrade1 != "notpicked") {
		// If it's not an empty selection, convert the letter to a number :)
		NumberGrade1 = letterToNumber(LetterGrade1);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		notPicked = true;
		alert("Enter a valid grade for Grade 1! :(");
	}
	
	// Check whether a letter grade was selected
	if (LetterGrade2 != "notpicked") {
		// If it's not an empty selection, convert the letter to a number :)
		NumberGrade2 = letterToNumber(LetterGrade2);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		notPicked = true;
		alert("Enter a valid grade for Grade 2! :(");
	}
	
	// Check whether a letter grade was selected
	if (LetterGrade3 != "notpicked") {
		// If it's not an empty selection, convert the letter to a number :)
		NumberGrade3 = letterToNumber(LetterGrade3);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		notPicked = true;
		alert("Enter a valid grade for Grade 3! :(");
	}
	
	// Check whether a letter grade was selected
	if (LetterGrade4 != "notpicked") {
		// If it's not an empty selection, convert the letter to a number :)
		NumberGrade4 = letterToNumber(LetterGrade4);
	} else {
		// Otherwise, we mark down that the user didn't pick a grade!
		notPicked = true;
		alert("Enter a valid grade for Grade 4! :(");
	}
	// Stuffs it in your face if you didn't pick a value
	if (notPicked == true) {
		return;
	}
 */