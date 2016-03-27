function checkInfo () {
	var userMail = document.getElementById("mail").value;
	var userPassword = document.getElementById("password").value;

	if (userMail == "" || userPassword == "") {
		alert ("Please fill in all fields");
		return false;
	}
	else {
		return true;
	}
}
