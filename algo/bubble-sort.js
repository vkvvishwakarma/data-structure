// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var lengthArr = A.length;
    var bFlage = true;
     const setValue = new Set(A);
    for (let j = 1; j <= lengthArr; j++){
        if( !setValue.has(j) ){
            console.log(setValue);
            console.log("not in set ");
            bFlage = false
            return j;
        }
    }
    if(bFlage){
        console.log(" check flage");
        return A[lengthArr - 1] + 1;
    }
}
console.log(solution([1,2,3]))