var counter = 1;
while(counter <=10) {
	document.write("<p>This is paragraph " +counter+".</p>")
	counter++;
}

var counter = 1;
do {
	document.write("This is iteration " +counter+"<br>");
	counter++;
} while(counter <=10);

for(i=0;i<10;i++){
	j = i + 1;
	document.write("This loop ran "+j+" times<br>");
}