var day = "friday";
if (day == "friday"){
	document.write("It's friday, its friday");
	document.write("<br>");
}

var age = 17;
if (age >=  18){
	document.write("Welcome to my online casino");
} else if (age == 17){
	document.write("Sorry bro, come back next year");
} else {
	document.write("You are not old enough!");
}
document.write("<br>");

var age2 = 15;
var max_age = 30;
var min_age = 18;
if(age2 >= min_age) {
	if(age2 <= max_age){
		document.write("You meet the requirements");
	} else {
		document.write("You are too old");
	}
} else {
	document.write("You failed the requirements")
}
document.write("<br>");

var first_name = "Quentin";
var last_name = "Smith";
if ((first_name=="Quentin") && (last_name=="Watt")){
	document.write("Hello " +first_name+ " " +last_name);
} else if ((first_name=="Quentin") || (last_name=="Watt")){
	document.write("You have the same first name or last name");
}