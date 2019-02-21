/* JavaScript Regex Validation */
/* Written by Vakindu Philliam */

//Is Email: Validating that a user input is indeed an Email (Method 1)


function isEmail(elementValue){      
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue); 
 }


//Is Email: Validating that a user input is indeed an Email (Method 2)

//This segment displays the validation rule for E-mail.

function emailValidation(inputtext, alertMsg){
var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
if(inputtext.value.match(emailExp)){
return true;
}else{
document.getElementById('p3').innerText = alertMsg;
inputtext.focus();
return false;
}
}


//Is Phone: Validating that a user input is a valid phone number

function isPhone(elementValue){      
   var phonePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return phonePattern.test(elementValue); 
 }


//Letters Only: Validating that a user input is a text character

//This segment displays the validation rule for name text field.

function inputAlphabet(inputtext, alertMsg){
var alphaExp = /^[a-zA-Z]+$/;
if(inputtext.value.match(alphaExp)){
return true;
}else{
document.getElementById('p1').innerText = alertMsg;
inputtext.focus();
return false;
}
}


//Is Integer: Validating that a user input is an integer

//This segment displays the validation rule for zip code field.

function textNumeric(inputtext, alertMsg){
var numericExpression = /^[0-9]+$/;
if(inputtext.value.match(numericExpression)){
return true;
}else{
document.getElementById('p6').innerText = alertMsg;
inputtext.focus();
return false;
}
}


//Are Letters and Numbers only: Validating that a user input is an alphanumeric character

//This segment displays the validation rule for address field.

function textAlphanumeric(inputtext, alertMsg){
var alphaExp = /^[0-9a-zA-Z]+$/;
if(inputtext.value.match(alphaExp)){
return true;
}else{
document.getElementById('p5').innerText = alertMsg;
inputtext.focus();
return false;
}
}
