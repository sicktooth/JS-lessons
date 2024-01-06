var output = [];
var numb = 1;
function fizzBuzz () {

    if (numb % 3 === 0 && numb % 5 === 0) {
        output.push("fizzBuzz");
    }
    else if (numb % 3 === 0) {
        output.push("fizz");
    }
    else if (numb % 5 === 0) {
        output.push("buzz");
    }
     else {
        output.push(numb); 
    }
    
    

    numb++;
    
    console.log (output);
}