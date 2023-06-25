for(let i = 0; i < 3;i++){
    console.log(i);
}

console.log("________________________");

for(let i=1;i <=3;i++){
    console.log(i);
}

console.log("________________________");

let anything;
for(anything=0;anything<=10;anything++){
    console.log(anything);
}
console.log("Value of anything:",anything);

console.log("________________________");

let sum= 0;
for(let i =1;i<=5;i++){
    sum=sum+i;
    console.log(`Sum = ${sum}`);
}

console.log("________________________");
let sum1 = "Hello";
for(let i=3;i<=5;i++){
    sum1 = sum1 +2;
    console.log(`Sum = ${sum1}`);
}

console.log(`Final Sum = ${sum1}`);

console.log("________________________");

const myString = "Germany";
console.log(myString.length);
console.log(myString[2]);

for(let i=0;i<myString.length;i++){
    console.log(`The index of ${myString[i]} is ${i}`);
}
console.log(myString[4]);

console.log("________________________");

const fruits = ["Apple","Orange","Banana","Melon","Lemon"];
for(let i = 0;i < fruits;i++){
    const fruit = fruits[i];
    console.log(fruit);
}

const newArr = [];
for(let i= fruits.length-1;i>=0;i--){
    newArr.push(fruits[i])
}
console.log(newArr);