//string methods
//search
let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");
console.log(pos);//7

//slice-can accept negative value
let str = "Apple, Banana, Kiwi";
let res = str.slice(7,13);
console.log(res);//Banana

let str = "Apple, Banana, Kiwi";
let res = str.slice(-12, -6);
console.log(res);//Banana

//substring-same as slice but can not accept negative value
let str = "Apple, Banana, Kiwi";
let res = str.substring(7, 13);
console.log(res);//Banana

//substr- in this second parameter is the length
let str = "Apple, Banana, Kiwi";
let res = str.substr(7, 6);
console.log(res);//Banana

//replace
let str = "Welcome to letsupgrade a cousre conducted by letsupgrade"
let txt = str.replace("letsupgrade","javascript");
console.log(txt);//Welcome to javascript a cousre conducted by letsupgrade

//trim
var str = "     Hello World!     ";
console.log(str);


//-------------------------------------------------------------
//Array methods
//join
let fruits = ["Banana", "Orange", "Apple", "Mango"];
consol.log(fruits.join(" * "));

//delete
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];// Changes the first element in fruits to undefined

//splice
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("original array",fruits);//["Banana", "Orange", "Apple", "Mango"]
let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
console.log("After splicing",fruits);//["Banana", "Orange", "Lemon", "Kiwi"]
console.log("removed",removed);//["Apple", "Mango"]

//slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);//Banana,Orange,Lemon,Apple,Mango
var citrus = fruits.slice(3);
console.log(citrus);//Apple,Mango