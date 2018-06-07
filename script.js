function validateForm(){
	const formValues = {

		firstName : document.getElementById("fname").value,
		secondName: document.getElementById("sname").value,
		userName: document.getElementById("uname").value,
		password: document.getElementById("pass").value,
		email: document.getElementById("mail").value,
		mobileNumber: document.getElementById("mobile").value,
		genderMale: document.getElementById("male").checked,
		genderFemale: document.getElementById("female").checked,
		country: document.getElementById("country").value,
		comment: document.getElementById("message").value,
		file: document.getElementById("file").value,
		termsAndCondition: document.getElementById("terms").checked

	};

	const toFocus = {

		firstName : document.getElementById("fname"),
		secondName : document.getElementById("sname"),
		userName : document.getElementById("uname"),
		password : document.getElementById("pass"),
		email : document.getElementById("mail"),
		mobileNumber : document.getElementById("mobile"),
		comment : document.getElementById("message")

	};

	const checkPassword = {

		lowerCase : /[a-z]/,
		upperCase : /[A-Z]/,
		numeric : /[0-9]/,
		specialChar : /[!@#$%^&*]/,

	};

	const checkMobile = {

		...checkPassword,

	};

	const checkEmail = {

		 email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,

	};


	const validatePassword = {

		lowerCase : checkPassword.lowerCase.test(formValues.password),
		upperCase : checkPassword.upperCase.test(formValues.password),
		numeric : checkPassword.numeric.test(formValues.password),
		specialChar : checkPassword.specialChar.test(formValues.password)

	};

	const validateMobile = {

		lowerCase : checkMobile.lowerCase.test(formValues.mobileNumber),
		upperCase : checkMobile.upperCase.test(formValues.mobileNumber),
		specialChar : checkMobile.specialChar.test(formValues.mobileNumber)

	};

	const validateEmail = {

		email : checkEmail.email.test(formValues.email),

	};

	//validate first name

	if(formValues.firstName == ""){
		alert("Please enter your first name");
		toFocus.firstName.focus();
		return false;
	}

	//validate second name

	if(formValues.secondName == ""){
		alert("Please enter your second name");
		toFocus.secondName.focus();
		return false;
	}

	//validate user name

	if(formValues.userName == ""){
		alert("Please enter your user name");
		toFocus.userName.focus();
		return false;
	}

	//validate password

	if(formValues.password == ""){
		alert("Password field must not be empty");
		toFocus.password.focus();
		return false;
	}

	if(validatePassword.lowerCase == ""){
		alert("Password must contain atleast one lower case");
		toFocus.password.focus();
		return false;
	}

	if(validatePassword.upperCase == ""){
		alert("Password must contain atleast one upperCase");
		toFocus.password.focus();
		return false;
	}

	if(validatePassword.numeric == ""){
		alert("Password must contain atleast one number");
		toFocus.password.focus();
		return false;
	}

	if(validatePassword.specialChar == ""){
		alert("Password must contain atleast one special character");
		toFocus.password.focus();
		return false;
	}

	if(formValues.password.length <= 8){
		alert("Password length must be greater than 8");
		toFocus.password.focus();
		return false;
	}

	//validate email

	if(formValues.email == ""){
		alert("Please enter your email id");
		toFocus.email.focus();
		return false;
	}

	if(validateEmail.email == ""){
		alert("Please enter a valid email id");
		toFocus.email.focus();
		return false;
	}

	//validate mobile number

	if(formValues.mobileNumber == ""){
		alert("Please provide your mobile number");
		toFocus.mobileNumber.focus();
		return false;
	}

	if(validateMobile.lowerCase != "" || validateMobile.upperCase != "" || validateMobile.specialChar != ""){
		alert("Only numbers are allowed");
		toFocus.mobileNumber.focus();
		return false;
	}

	if(formValues.mobileNumber.length != 10){
		alert("Invalid mobile number.Only 10 numbers are allowed");
		toFocus.mobileNumber.focus();
		return false;
	}

	//validate gender

	if(formValues.genderMale == "" && formValues.genderFemale == ""){
		alert("Please choose your gender");
		return false;
	}

	if(formValues.genderMale != "" && formValues.genderFemale != ""){
		alert("Choose only one gender");
		return false;
	}

	//validate country

	if(formValues.country == "Select"){
		alert("Please select your country");
		return false;
	}

	//validate comment

	if(formValues.comment == ""){
		alert("Please give a comment about us");
		toFocus.comment.focus();
		return false;
	}

	//validate file

	if(formValues.file == ""){
		alert("Please upload your file");
		return false;
	}

	//validate terms and condition

	if(formValues.termsAndCondition == ""){
		alert("Please accept our terms and conditions");
		return false;
	}

}