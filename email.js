function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Sweet Jesus it's valid");
document.form1.text1.focus();
return true;
}
else
{
alert("Come on Bucko give me a valid address");
document.form1.text1.focus();
return false;
}
}