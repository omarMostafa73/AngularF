//problem 5


function Calculator(num1, num2){

    function sum(){ 
        return num1 + num2; 
    }
    
    function subtraction(){ 
        return num1 - num2; 
    }
    
    function multiplication(){ 
        return num1 * num2; 
    }
    
    function divide(){ 
        return num1 / num2;
    }

    return { sum, subtraction, multiplication, divide };
}

let calc = Calculator(23, 8);
console.log(calc.sum());                       
calc.subtraction();                
calc.multiplication();                   
calc.divide();