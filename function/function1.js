//Function

function printMessage(){
    //body of the function
    console.log("This is a function");
}
printMessage();


let userName="John";
function showMessage2(){
    userName="Bob";
    const message = `Hello ${userName}`;
    console.log(message);
}
showMessage2()
console.log(userName);

const userName2 = "Jane";
function printHello(){
    const userName2="Doe";
    const message =`Hello ${userName2}`;
    console.log(message);
}
printHello();
console.log(userName2);