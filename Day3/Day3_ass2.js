//var
var a = 1;
console.log(a);//1
a = 2;
console.log(a);//2
var a = 3;
console.log(a);//3

{
    var a = 4;
    console.log(a);//4
}
console.log(a);//4:This will give output 4 because var has a global scope


//let
let b = 1;
console.log(b);//1
b = 2;
console.log(b);//2
//let b = 3;//this will give an error because we cannot redeclare the variable like var
{
    let b = 4;
    console.log(b);//4
}
console.log(b);//2:This will give output 2 because let has a block level scope

//const
const c = 1;
console.log(c);//1
//c = 2;//this will give error because in const neither we can redeclare or reassign the variable
//const c =3;
{
    const c = 4;
    console.log(b);//4
}
console.log(c);//1:like let const is also has a block level scope
