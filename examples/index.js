var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if ( (username == "rama" && password == "123") ||(username == "shama" && password == "1234") || (username == "bhama" && password == "12345") ){

window.location = "../black-dashboard-master/examples/dashboard (1).html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function palidate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email= document.getElementById("email").value;
alert("logged in");
window.location = "../black-dashboard-master/examples/dashboard (1).html"; // Redirecting to other page.


// Disabling fields after 3 attempts.

}
