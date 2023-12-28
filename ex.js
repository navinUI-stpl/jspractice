// var x = 10;
// var y = 20 ;
// var z = x + y;
// document.write(z)
// document.write("<br/>")


// var a =10;
// var b = ++a;

// document.write("a = " + a +"<br/>")
// document.write("b = " + b +"<br/>")



//alert
// here we have only one button
// alert("click to proceed");

//confirm
// here we have a 2 buttons
// confirm("confirm the submition");

//here we use prompot
// var c = prompt("Enter the user ID");
// document.write(c);

//addition two number using promp and parseInt
// var num1 = parseInt(prompt("Enter the first Number"));
// var num2 = parseInt(prompt("Enter the second Number"));

// var sum= num1+num2;

// document.write(sum);


//IF condition

// var x = prompt("Enter the number");
// if(x == 10){
//     document.write("x:"+x)
// }

//If else condition
// var x = prompt("Enter the number");
// if(x == 10){
//     document.write("x:"+x)
// }
// else{
//     document.write("Else is block X :"+x);
// }

//student pass or fail program

// var javascriptmarks = parseInt(prompt("enter js marks"));
// var htmlmarks = parseInt(prompt("enter HTML marks"));
// var css = parseInt(prompt("enter css marks"));

// var total = javascriptmarks+htmlmarks+css;

// document.write("total marks :" +total);

// var avg = total/3;
// document.write("avg" + avg);

// if(javascriptmarks >= 35 && htmlmarks>=35 && css >=35 ){

//         document.write("Reselt : Passed");
//     if(avg > 35 && avg <= 59){
//     document.write("Grade : C")

// }
// else if(avg>=60 && avg <= 75){
//     document.write("Grade : B")
// }
// else{
//     document.write("Grade : A")
// }
// }

// else{
//     document.write("Result : Failde");
// }


var n = parseInt(prompt("enter the number","1 - 3"));

switch(n){
    case 1 :
    document.write("one");
    break;

    case 2 :
    document.write("tow");
    break;

    default : document.write("three")

}