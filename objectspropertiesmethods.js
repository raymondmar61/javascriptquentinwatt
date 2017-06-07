var x = "My name is Quentin";
document.write(x.length);  //writes 18.  objectname.propertyname
document.write(x.toUpperCase())  //writes MY NAME IS QUENTIN
var capitals = x.toUpperCase();  //objectname.method
document.write(capitals); //writes MY NAME IS QUENTIN

function change() {
	var para = document.getElementById("para");
	//para.innerHTML = "That tickles";  //instructor says better to save as variable
	document.getElementById("para").innerHTML = "That tickles";
}

function changeimgonetime() {
	var image = document.getElementById("social");
	image.src = "IMAG2291.jpg";
}

var image_tracker = "f";
function changeimg() {
	var image = document.getElementById("social");
	if (image_tracker =="f"){
		image.src = "IMAG2291.jpg";
		image_tracker = "t";
	} else {
		image.src = "IMAG2290.jpg";
		image_tracker = "f";
	}
}

var image_trackerxmastree = "1";
function changeimgxmastree() {
	var image = document.getElementById("xmastree");
	if (image_trackerxmastree =="1"){
		image.src = "IMG_0350.jpg";
		image_trackerxmastree = "2";
	} else {
		image.src = "IMG_0346.jpg";
		image_trackerxmastree = "1";
	}
}
//setTimeout(code in here,timein miliseconds)
//setTimeout("changeimgxmastree()",2000)  //setTimeout is run one time only
//setInterval("changeimgxmastree()",2000)  //setInterval is run indefinitely
var timer = setInterval("changeimgxmastree()",2000) //setIntervial runs even when assigned a variable
//clearInterval(timer); is useless in objectspropertiesmethods.js.  Type code to onclick= in HTML code.