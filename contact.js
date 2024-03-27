function validateForm(){
    var nameVal=document.getElementById("full_name").value;
    var emailVal=document.getElementById("email").value;
    var numberVal=document.getElementById("number").value;
    var commentVal=document.getElementById("comment").value;
    var doISend=true;
    if(nameVal==""){
        document.getElementById("full_name").style.border = "solid red";
        doISend=false;
    }else{
        document.getElementById("full_name").style.border = "solid green";
    }
    if(emailVal==""){ 
        document.getElementById("email").style.border = "solid red";
        doISend=false;
    }else{
        document.getElementById("email").style.border = "solid green";
    }
    if(numberVal==""){
        document.getElementById("number").style.border = "solid red";
        doISend=false;
    }else{
        document.getElementById("number").style.border = "solid green";
    }
    if(commentVal==""){
        document.getElementById("comment").style.border = "solid red";
        doISend=false;
    }else{
        document.getElementById("comment").style.border = "solid green";
    }
    if(doISend==false){
        alert("Note: ALL inputs are Mandatory, please amend your entries and try again.");
        return false;
    }
}
