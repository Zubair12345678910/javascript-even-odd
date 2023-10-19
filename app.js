

 // ----------- even number  ------------

for (
    var a = 2 ; a <= 50; a+=2){
        console.log(a);
    }


    // ----------- odd number  ------------


    for (
    var a = 1 ; a <= 50; a+=2){
        console.log(a);
    }


    //-------------- even and odd Number ------------

for (
    var i = 1 ; i <= 50; i++){
        console.log(i, i % 2 === 0 ? "(evan)":"(odd)");

    }



    //---------- nested for loop -------



var line = 10; 

for (var i = 1; i <= line; i++) {
  var num = "";
  for (var j = 1; j <= i; j++) {
    num += j;
  }
  document.write(num);
  document.write("<br>")
}


// ----------- question Number 4 -------------


var stud = [
{
Name : "zubair",
fatherName : "ilyas",
age : 23,
class : "web development"

},
{
    Name : "arman",
fatherName : "ilyas",
age : 21,
class : "web development"
},
{
    Name : "ghufran",
fatherName : "ilyas",
age : 24,
class : "web development"
},
{
    Name : "murtuza",
    fatherName : "sheikh",
    age : 27,
    class : "web development"
},
{
    Name : "rohan",
fatherName : "jabbar",
age : 25,
class : "web development"
},
{
    Name : "kawsh",
fatherName : "sheikh",
age : 23,
class : "web development"
},
{
    Name : "arham",
fatherName : "sheikh",
age : 25,
class : "web development"
},
{
    Name : "yousuf",
fatherName : "ali",
age : 29,
class : "web development"
},
{
    Name : "hamza",
fatherName : "sheikh",
age : 27,
class : "web development"
},
{
    Name : "abid",
fatherName : "mukhtar",
age : 20,
class : "web development"
}

]


for ( var i = 0; i < stud.length; i++) {
        
    document.write("Name:", stud[i].Name);
    document.write("<br>fatherName:", stud[i].fatherName);
    document.write("<br>age:", stud[i].age);
    document.write("<br>class:", stud[i].class);
    document.write("<hr>");    }




