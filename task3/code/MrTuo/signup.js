/*用于注册&登录切换*/

function displaySignUp(){
	var signUp = document.getElementById('sign-up');
	var signIn = document.getElementById('sign-in');
	signUp.style.display = 'block';
	signIn.style.display = 'none';
}

function displaySignIn(){
	var signUp = document.getElementById('sign-up');
	var signIn = document.getElementById('sign-in');
	signIn.style.display = 'block';
	signUp.style.display = 'none';
}
/*用于检验表单*/
function checkSignUp(){
	var name = document.getElementById('sign-up-name');
	var email = document.getElementById('sign-up-email');
	var pwd = document.getElementById('sign-up-pwd');
	var fail = 0;
	var reName = /^[\u4E00-\u9FFF]{2,20}$/;
	var rePhoneNumber = /^\d{11,11}$/;
	var reEmail = /^[0-9a-zA-Z\.\_]{1,15}@\w+.com$/;

	var ul = document.getElementById('sign-up-ul');

	if(!reName.test(name.value)){
		var newLi1 = document.createElement('li');
		newLi1.innerText = "姓名为2~20个汉字";
		ul.appendChild(newLi1);
		fail = 1;
	}

	if((!rePhoneNumber.test(email.value))&&(!reEmail.test(email.value))){
		var newLi2 = document.createElement('li');
		newLi2.innerText = "邮箱或手机号格式不正确";
		ul.appendChild(newLi2);
		fail = 1;
	}

	if(pwd.value.length<=6){
		var newLi3 = document.createElement('li');
		newLi3.innerText = "密码长度不少于6位";
		ul.appendChild(newLi3);
		fail = 1;
	}
 	return false;
}
