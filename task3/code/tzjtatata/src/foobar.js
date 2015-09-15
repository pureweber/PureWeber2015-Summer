function isUsername(str) {
    var reg;
    reg = /^([a-zA-Z0-9_-]){5,15}$/;
    //Example: tzjtatata_666
    return reg.test(str);
}
function checkName(divID, form) {
    var div = document.getElementById(divID);
    div.innerHTML = "";
    var inputName = form.username.value;
    if (inputName == "") {
        div.innerHTML = "The username is empty yet";
        return false;
    }
    if (inputName.length < 5 || inputName.length > 15) {
        div.innerHTML = "The username should contain 5-15 characters";
        document.signUpForm.username.select();
        return false;
    }
    if (!isUsername(inputName)) {
        div.innerHTML = "The name needs to be consist of numbers or alphabets";
        document.signUpForm.username.select();
        return false;
    }
    return true;
}

function checkPassword(divID, form) {
    var div = document.getElementById(divID);
    div.innerHTML = "";
    var password = form.password.value;
    if (password == "") {
        div.innerHTML = "The password is empty yet";
        return false;
    }
    if (password.length < 6 || password.length > 12) {
        div.innerHTML = "The username should contain 6-12 characters";
        document.signUpForm.password.select();
        return false;
    }
    return true;
}

function recheckPassword(divID, form, rePasswordID) {
    var div = document.getElementById(divID);
    div.innerHTML = "";
    var password = form.password.value;
    var passwordRecheck = document.getElementById(rePasswordID).value;
    if (password != passwordRecheck) {
        div.innerHTML = "Input passwords are inconsistent";
        return false;
    }
    return true;
}
function isPhoneNumber(str) {
    var reg;
    reg = /^1([0-9]){10}$/;
    //Example: 15645160847
    return reg.test(str);
}
function checkPhoneNumber(divID, form) {
    var div = document.getElementById(divID);
    div.innerHTML = "";
    var phoneNumber = form.phone.value;
    if (0 == phoneNumber.length) {
        div.innerHTML = "The phone number is empty yet";
        return false;
    }
    if (!isPhoneNumber(phoneNumber)) {
        div.innerHTML = "Invalid phone number format!";
        return false;
    }
    return true;
}
function isEmail(str) {
    var reg;
    reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{1,5}){1,3})$/;
    //Example: sqlyz@hit.edu.cn
    return reg.test(str);
}

function checkEmail(divID, emailID) {
    var div = document.getElementById(divID);
    div.innerHTML = "";
    var email = document.getElementById(emailID).value;
    if (0 == email.length) {
        div.innerHTML = "The email is empty yet";
        return false;
    }
    if (!isEmail(email)) {
        div.innerHTML = "Invalid email format!";
        return false;
    }
    return true;
}

function signUpCheck() {
    return !!(checkName("signUpUsernameCheckDiv", document.signUpForm)
    && checkPassword("signUpPasswordCheckDiv", document.signUpForm)
    && recheckPassword("signUpRepasswordCheckDiv", document.signUpForm, "signUpRePassword")
    && checkPhoneNumber("signUpPhoneCheckDiv", document.signUpForm)
    && checkEmail("signUpEmailCheckDiv", "signUpEmail"));
}
function signUpSubmit() {
    var checkResult = signUpCheck();
    if (checkResult) {
        alert("Successfully signed up!");
    } else {
        alert("The form hasn't been filled in correctly");
    }
    return checkResult;
}
function signInCheck() {
    return !!(checkName("signInUsernameCheckDiv", document.signInForm)
    && checkPassword("signInPasswordCheckDiv", document.signInForm));
}
function signInSubmit() {
    var checkResult = signInCheck();
    if (checkResult) {
        alert("Successfully signed in!");
    } else {
        alert("The form hasn't been filled in correctly");
    }
    return checkResult;
}
function switchToSignIn() {
    document.getElementById("signUpDiv").style.display="none";
    document.getElementById("signInDiv").style.display="inline";
}
function switchToSignUp() {
    document.getElementById("signInDiv").style.display="none";
    document.getElementById("signUpDiv").style.display="inline";
}
function clearSignUpCheck() {
    document.getElementById("signUpUsernameCheckDiv").innerHTML = "";
    document.getElementById("signUpPasswordCheckDiv").innerHTML = "";
    document.getElementById("signUpRepasswordCheckDiv").innerHTML = "";
    document.getElementById("signUpPhoneCheckDiv").innerHTML = "";
    document.getElementById("signUpEmailCheckDiv").innerHTML = "";
}
function clearSignInCheck() {
    document.getElementById("signInUsernameCheckDiv").innerHTML = "";
    document.getElementById("signInPasswordCheckDiv").innerHTML = "";
}
