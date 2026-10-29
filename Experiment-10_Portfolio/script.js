function validate(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let msg=document.getElementById("message").value;

  if(name==""){
    alert("Enter Name");
    return;
  }
  if(email==""){
    alert("Enter Email");
    return;
  }
  if(msg==""){
    alert("Enter Message");
    return;
  }
  document.getElementById("result").innerHTML=
    "Thank You! Your message has been submitted.";
}
