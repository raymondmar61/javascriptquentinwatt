/* Reminder multi-line comments is the following
here */

var x = 3;
document.write("I have " + x + " apples.");  //writes I have 3 apples.
document.write("<br>");

var status = "Billy said \"Programmers creed has the best tutorials\".  I need escape character backslash to ignore the quotation mark.";
document.write(status);  //writes Billy said "Programmers creed has the best tutorials". I need escape character backslash to ignore the quotation mark.
document.write("<br>");

var userAge = 21;
document.write(userAge > 20);  //writes true.  Boolean is true or false.
userAge++;  //increment.  Add 1.
document.write(userAge)  //writes 22
document.write("<br>");

//Compounding is confusing
var apples = 5;
var pie = 3;
document.write(apples + pie);  //writes 8
document.write(apples += pie);  //writes 8.  Compound addition.  Apples is 8
var apples = 5;
var pie = 3;
document.write(apples -= pie);  //writes 2.  Compound subtraction.  Apples is 2.
var apples = 5;
var pie = 3;
document.write(apples % pie); //writes 2.  Mod.  Get remainder.
document.write("<br>");

var sentence1 = "My name is Quentin";
var sentence2 = "and I am 21 years old.";
document.write(sentence1 + " " +sentence2);
document.write("<br>");

var age = 12;
document.write("Hello you are " +age+ " years old");
document.write("<br>");

alert("You have opened my web page");

var championglobal = "fizzglobal";
function printChampion(){
	var championlocal = "fizzlocal"
	document.write(championglobal + " inside function<br>");
	document.write(championlocal + " inside function<br>");
}
printChampion();
document.write("<br>");
document.write(championglobal + " outside function")
document.write("<br>");
//document.write(championlocal + " outside function");  //error message local varable outside function
