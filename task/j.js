//multiplu by 3
let ar7 = [1, 2, 3, 4, 5];
let result5 = ar7.map(x => x * 3);
console.log(result5);

//fillter the same number make
let arr112 = [1, 2, 2, 3, 3, 4, 5];
let result12 = arr112.filter((x, y, z) => z.indexOf(x) === y);
console.log(result12); 

//sort by age 
let a2 = [
    { name: "Hussam", age: 30 },
    { name: "Ali", age: 40 },
    { name: "Ahmad", age: 22 }
];

a2.sort((a, b) => a.age - b.age);

console.log(a2);


