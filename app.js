let number=prompt("Enter a number to check if it is negative,postive or zero");
if(number>0){
    console.log("The number is positive");
    alert("The number is positive");
}else if(number<0){
    console.log("The number is negative");
    alert("The number is negative");
}else if(number==0){
    console.log("The number equals to zero");
    alert("The number equals to zero");
}else if(isNaN(number)){
    console.log("Invalid input, please enter a number");
    alert("Invalid input, please enter a number");
}