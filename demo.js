function Hello ()
{
document.write("<H1>HELLO -1235 </H1>")
console.log("Hello How are you")
}

function sum(x,y)
{
    var z = x+y;     
    return z;
}

function executeArray()
{
    var myarr  =["an", 1, 5, "we"];

    for (var i=0; i<= myarr.length; i++)
    {
        console.log(myarr[i]);
    }
    return myarr;
}

let person= {
    name: "Ravi",
    age: 30
}

console.log(person);
var a = sum(1,3);
console.log (a);

var aa = executeArray();
console.log(aa);




