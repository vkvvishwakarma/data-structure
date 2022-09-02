function sumOfNumber(num){

    for(var sum = 0; num > 0;){
        sum += num %10;
        num = parseInt(num/10)
    }
    return sum;
}
console.log(sumOfNumber(787));


// 2nd solution with recursive
function getSumOfNumber(num){
    if(num==0){
        return 0;
    }
    return (num % 10) + getSumOfNumber(parseInt(num/10)) ;
}
console.log(getSumOfNumber(888));