var div1 = document.getElementById("bgp1");

var div2 = document.getElementById("bgp2");

var anode=document.getElementsByName("aa");

var inode1=document.getElementsByName("mail1");
var inode2=document.getElementsByName("tel1");
var inode3=document.getElementsByName("password1");
var i1=document.getElementsByName("mail2");
var i2=document.getElementsByName("password2");

function up()
{
	anode[0].style.display="inline";
	anode[1].style.display="none";
	div1.style.display="none";
	div2.style.display="block";
}


function inf()
{
	anode[0].style.display="none";
	anode[1].style.display="inline";
	div1.style.display="block";
	div2.style.display="inline";
}

function check()
{
if(inode1[0].value.length==0||inode2[0].value.length==0||inode3[0].value.length==0||inode3[1].value.length==0)
{
	alert("不能为空！");

}
else
{

	if (inode1[0].value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) 
{
	console.log("邮箱正确");
}
	else
{
	alert("邮箱错误"); 
	inode1[0].value="";
}
if (inode2[0].value.search(/^([0-9]|[\-])+$/g) != -1) 
{
	console.log("手机号码正确");
}
	else
{
	alert("手机号码错误"); 
	inode2[0].value="";
}

if (inode3[0].value.length<6||inode3[1].value.length<6)
{
	alert("密码小于6位");
}
else{
	if(inode3[0].value!=inode3[1].value)
{
	alert("两次密码不一致错误"); 
	inode3[1].value="";
}

}

}
}

function signin()
{
if(i1[0].value.length==0||i2[0].value.length==0)
{
	alert("不能为空！");
}
else
{
	if(i1[0].value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) 
	{
		console.log("right");
	}
	else
	{
			alert("邮箱错误"); 
		i1[0].value="";
	}

if (i2[0].value.length<6)
{
	alert("密码小于6位");
}

}

}
var flag;


function login()
{
	flag=1;
}

function sigin()
{
	flag=0;
}

