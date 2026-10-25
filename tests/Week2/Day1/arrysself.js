// Creating an Empty Array
let a = [];
console.log(a)

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

//Creating and Intiaizing an array with values
let c = new Array(50,80,30);
console.log(c);

let n = ["Sushma","Netra","Thunga"];

//Accessing Array Elements
console.log(n[0]);
console.log(n[2])

//Accessing last Array Elements
// let lst =  n.length -1
let lst = n[n.length - 1]
console.log("Last Item:", lst)

//Creating an Array & Initializing with Values
let x= ["Shanu","Rihanth","RS"]
console.log(x);

x[2] = "MD"
console.log(x);

//Adding Elements to the Array

//Creating Array and Intitializing with Values
let Family = ["Padma","Srinivas","Netra","Sushma","Thunga"];

//add Elements to the end of Array
Family.push("Manju");

//Add Element to the beginning
Family.unshift("Shanu");
console.log(Family);

//Creating an Array and Intializing with values
console.log("Original Array:" +Family);

//Remove and returns the last element
let last = Family.pop();
console.log("After Removing the last:", Family);

//Remove and returns the first element
let first = Family.shift();
console.log("After Removing the first:", Family);

//Creating an array for splice eg
Family.splice(1,2);
console.log("After Removing 2 elements starting from Index 1:",Family)

//Creating a Array and Intializing with Values
console.log(Family.length)
let len = Family.length;
console.log("Array Length:", +len)
