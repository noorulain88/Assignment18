function getAge(){
    var date=new Date();
    var BDY=document.getElementById("dateOfBirth").value;
    var userBirthday=new Date(BDY)
    var userMilliSeconde=userBirthday.getTime()
    var totalmilliseconde=date.getTime()
     var difference=totalmilliseconde-userMilliSeconde
     var age =difference/1000/60/60/24/365
     var userAge=Math.floor(age)
    console.log("user age is " ,userAge)

 document.getElementById("user-dob").innerHTML ="your age is"+userAge
if(userAge<18){
    document.getElementById("user-dob").innerHTML ="your age is"+userAge +" So ,you are not welcomed"
}
else{
   document.getElementById("user-dob").innerHTML ="your age is"+userAge +" So ,you are  welcomed"
}
}

// 
function getPassword(){
    var psswd=document.getElementById("password").value
    var length=psswd.length
    if(length<6){
        document.getElementById("user-password").innerHTML="your password length is less then 6"
    }
    else{
             document.getElementById("user-password").innerHTML="your password is accepted"
    }

}



