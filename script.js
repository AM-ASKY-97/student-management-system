function validate(){
    var fName = document.myForm.fName.value;
    var lName = document.myForm.lName.value;
    var email = document.myForm.email.value;
    var phoneNumber = document.myForm.phoneNumber.value;
    var address = document.myForm.address.value;

    if (fName == "")
    {
        document.getElementById('fName').innerHTML = "Enter your Name";
        return(false);
    }else{
        document.getElementById('fName').innerHTML = " ";
    }


    if(lName =="")
    {
        document.getElementById('lName').innerHTML = "Enter Your Last Name";
        return(false);
    }else{
        document.getElementById('lName').innerHTML = " ";
    }


    if(email == "")
    {
        document.getElementById('email').innerHTML = "Enter Your Email ID"
        return(false);
    }else{
        document.getElementById('email').innerHTML = " ";
    }


    if(phoneNumber == ""){
        document.getElementById('phoneNumber').innerHTML = "Enter Your Phone Number";
        return(false);
    }else{
        document.getElementById('phoneNumber').innerHTML = " ";
    }


    if(address == ""){
        document.getElementById('address').innerHTML = "Enter Your Address";
        return(false);
    }else{
        document.getElementById('address').innerHTML = " ";
    }

    return(true);
}