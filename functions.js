function makeAwesome (){
	document.write("You are awesome");
}
//makeAwesome();

function alertMessage(message){
	alert(message);
}
alertMessage("Value for message parameter inside alertMessage function");

function addNumbers(num1,num2,num3){
	var answer = num1 + num2;
	document.write(answer + "<br>");
}
addNumbers(2,4); //displays 6
addNumbers(15,3); //displays 18
addNumbers(12,24); //displays 36

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