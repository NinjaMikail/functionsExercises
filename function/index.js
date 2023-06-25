function printExponentialValues(a, b) {
    if (typeof a!=="number"||typeof b!=="number") {
        console.log("a or b is not a number");
    }
  let sum = a;
  let text = "";
  for (i = 0; i < b-1; i++) {
    sum = sum * a;
    console.log(sum);
    text=text+sum +" ";
  }
  console.log(text);
}
printExponentialValues(3, 5);

let fruit ="blueberry"
function printFavoriteFruit(fruit){
    console.log("My favorite Fruit is "+fruit);

}
printFavoriteFruit("Tobias");

function exponent(a,b){
    result=Math.pow(a,b);
    console.log(result);
}
exponent(2,4);

//u cant access variables in the function bc of {}