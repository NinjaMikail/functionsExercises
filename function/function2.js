function square(number){
    //number is a parameter or argument
    console.log(number * number);
}
square(5);

function showMessage(name,message){
    console.log(name + message);
}
showMessage("Anna","Hello");

console.log("___________________________________");

function userInfo(firstName, lastName,email,dob) {
    const userObject ={
        first_name:firstName,
        last_name:lastName,
        email:email,
        dob:dob,
    };
    if (userObject.dob === undefined) {
        userObject.dob = "Date of birth not avaiable"
    }
    console.log(userObject);
}
userInfo("John","Doe","john@mail.com");