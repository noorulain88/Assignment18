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
// 
function getPercent(){
    var obtainMarks=document.getElementById("obtain").value
    var totalMarks=document.getElementById("total").value
    var calculate=obtainMarks/totalMarks
    var value=calculate*100
    var roundOff=Math.floor(value)
  let grade;
  switch(true){
    case (roundOff>=80):
        grade="A+";
        break;
            case (roundOff>=70):
        grade="B";
        break;
            case (roundOff>=60):
        grade="C";
        break;
        default:
            grade="fail"

  }
    document.getElementById("user-marks").innerHTML="your percentage is "+grade
}
// part 02
// program 01
var student={
    name:"Noor",
    age:"17",
    course:"WEb development",
}
console.log("The user name is  ",student.name)
console.log("The user age is  ",student.age)
console.log("The user course is ",student.course)

// progrma 02
var car={
    model:"Civic",
    brand:"Honda",
    year:2025

}
car.year=2026
console.log("the update year is",car.year)

// program 03
var user={
    Name:"john",
    Email:true,
}
console.log("email is loggdin ",user.Email)
// program 04
var product={
    productName:"Laptop",
    prize:"70000",
    inStock:true

}
product.prize=80000
console.log("the update prize is",product.prize)
// progrma 05
var Name={
    firstName:"W.H",
    lastName:"Daivs",
}
      console.log("user full name is ",Name.firstName+ Name.lastName)



