let sum=0;
for(let i =0;i<=20;i++){
    sum=sum+i;
    console.log(sum);
}
for(let i=0;i<=5;i++){
    console.log("There is "+i+" bottle of beer on the wall");
}
for(let i=0;i<=20;i++){
    if (i%2===0) {
        console.log(i+" is even");
    }else{
        console.log(i+" is odd");
    }
}
for(let i=0;i<=10;i++){
    sum=i*9;
    console.log(i+" * 9 = "+sum);
}
for(let i=0;i<=10;i++){
    
    for(let j=0;j<=10;j++){
        sum=i*j;

        console.log(i+" * "+j+" = "+sum);
    }
}
for(let i=0;i<=100;i++){
    
    if (i%3===0&&i%5===0) {
        console.log("FizzBuzz");
    }else if(i%5===0){
        console.log("Buzz");
    }else if(i%3===0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
    
}

for(let i=0;i<=1000;i++){
    if (i%3===0&&i%5===0) {
        sum=sum+i;
        console.log(sum);
    }
}