function a()
{
	var re1 = /[0-9a-zA-Z\_]+/;
	var re2 =  /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var result = 1;
  	if(!re1.test(document.getElementById("name1").value)&&result===1)
  	{
  		alert("姓名输入格式错误");
  		result = 0;
  	}
  	if(!re1.test(document.getElementById("password1").value)&&result===1)
  	{
  		alert("密码输入格式错误");
  		result = 0;
  	}
  	if(document.getElementById("password1").value!==document.getElementById("password again").value&&result===1)
  	{
  		alert("两次密码不一致");
  		result = 0;
  	}
  	if(!re2.test(document.getElementById("Email").value)&&result===1)
  	{
  		alert("Email格式错误");
  		result = 0;
  	}
  	if(result===1)
  	{
  		alert("成功");
  	}
}

function b()
{
	var re1 = /[0-9a-zA-Z\_]+/;
	var result = 1;
  	if(!re1.test(document.getElementById("name2").value)&&result===1)
  	{
  		alert("姓名输入格式错误");
  		result = 0;
  	}
  	if(!re1.test(document.getElementById("password2").value)&&result===1)
  	{
  		alert("密码输入格式错误");
  		result = 0;
  	}
  	if(result===1)
  	{
  		alert("成功");
  	}
}

function textonfocus1(txt)
{
	if(txt.value === 'Name')
	{
		txt.value = '';
		txt.style.color = '#000000';
	}
}
function textonfocus2(txt)
{
	if(txt.value === 'Password')
	{
		txt.value = '';
		txt.style.color = '#000000';
	}
}
function textonfocus3(txt)
{
	if(txt.value === 'Password Again')
	{
		txt.value = '';
		txt.style.color = '#000000';
	}
}
function textonfocus4(txt)
{
	if(txt.value === 'Email')
	{
		txt.value = '';
		txt.style.color = '#000000';
	}
}
function textonblur1(txt)
{
	if(txt.value === '')
	{
		txt.value = 'Name';
		txt.style.color = '#cccccc';
	}
}
function textonblur2(txt)
{
	if(txt.value === '')
	{
		txt.value = 'Password';
		txt.style.color = '#cccccc';
	}
}
function textonblur3(txt)
{
	if(txt.value === '')
	{
		txt.value = 'Password Again';
		txt.style.color = '#cccccc';
	}
}
function textonblur4(txt)
{
	if(txt.value === '')
	{
		txt.value = 'Email';
		txt.style.color = '#cccccc';
	}
}

function login()
{
	document.getElementsByClassName("log")[0].style.display = "block";
	document.getElementsByClassName("sign")[0].style.display = "none";
}

function signup()
{
	document.getElementsByClassName("log")[0].style.display = "none";
	document.getElementsByClassName("sign")[0].style.display = "block";
}
