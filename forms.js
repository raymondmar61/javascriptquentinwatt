function write_name(){
	var welcome_parra = document.getElementById("welcome");
	var name = document.getElementById("name");

	welcome_parra.innerHTML = "welcome " + name.value;
}

function check_info(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == "" || password == ""){
		alert("Please fill in all fields");
		return false; //browser doesn't allow user to submit
	} else {
		return true;  //browser does allow user to submit
	}
}

function is_checked(){
	var Yes_checked = document.getElementById("auto_renew_yes").checked;
	var No_checked = document.getElementById("auto_renew_no").checked;

	if(Yes_checked == false && No_checked == false){
		alert("Please select an option");
		return false;
	} else {
		return true;
	}
}

function is_checkedcheckbox(){
	var sports = document.getElementById("sports").checked;
	var electronics = document.getElementById("electronics").checked;
	var tools = document.getElementById("tools").checked;

	if (sports == false && electronics == false && tools == false) {
		alert("Please check a category");
		return false;
	} else {
		return true;
	}
}