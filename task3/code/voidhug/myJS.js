var btn = document.getElementById("button");
btn.onclick = function() {
    var password = document.getElementById("password").value;
    var fullname = document.getElementById("fullname").value;
    var accout = document.getElementById("accout").value;
    var confirmpwd = document.getElementById("confirmpwd").value;
    apos = accout.indexOf("@");
    dotpos = accout.lastIndexOf(".");
    if (fullname == "" || fullname == null) {
    alert("姓名不能为空！");
    } else if (apos < 1 || dotpos - apos < 2) {
    alert("邮箱格式不对！");
    } else if (password.length < 6) {
    alert("密码不能少于6位！");
    } else if (password != confirmpwd) {
    alert("两次密码输入不同！");
    } else {
    alert("Welcome to PureWeber!");
    }
}


var linksign = document.getElementById("asign");
var linklog = document.getElementById("alog");
linksign.onclick = function() {
    document.getElementById("viewsign").style.display = "none";
    document.getElementById("viewlog").style.display = "block";
}

linklog.onclick = function() {
    document.getElementById("viewsign").style.display = "block";
    document.getElementById("viewlog").style.display = "none";
}

var btnlog = document.getElementById("buttonlog");
btnlog.onclick = function() {
    var accoutlog = document.getElementById("accoutlog").value;
    var pwdlog = document.getElementById("passwordlog").value;
    //must match database
    if (accoutlog != "zhu_tian_cheng@126.com") {
        alert("账号错误！");
    } else if (pwdlog != "123456") {
        alert("密码错误！");
    } else {
        alert("Welcome to PureWeber！");
    }
}