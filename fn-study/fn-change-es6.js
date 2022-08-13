var square = function(n){
    return  n * n;
}

var addNumber = function(n){
    return n + 1;
}

console.log(addNumber(5));
console.log(square(5));

// one function can call all the functionality of math
var doMathInOneFunction = function (n, func){
    return func(n);
}

doMathInOneFunction(5, square);
doMathInOneFunction(4,addNumber);


// change those function to ES6

var increementNumber = n => {return n+1;}

var squareES6 = n =>{ return n * n; }

var mathForCalculation = (n,funcName)=>{ return funcName(); }
