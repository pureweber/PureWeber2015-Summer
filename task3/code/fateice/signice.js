window.onload = function () {
    var usernameObj = document.getElementById("username");
    var passwordObj = document.getElementById("password");
    var confirmObj = document.getElementById("confirm");

    usernameObj.onblur = checkUsername;
    passwordObj.onblur = checkPassword;
    confirmObj.onblur = checkConfirm;

    function checkUsername() {
        var usernameValue = trim(usernameObj.value);
        if (usernameValue == null || usernameValue == "")
            msg = " <font color='red'>must</font>";
    }
}