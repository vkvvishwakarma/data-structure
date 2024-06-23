function findMinimumValue( arr ){
    var firstIndexvalue = arr[0];
    for (var i = 1; i < arr.length-1; i++) {
        if( firstIndexvalue >  arr[i] ){
            firstIndexvalue = arr[i];
        }
    }
    return firstIndexvalue;
}

console.log( findMinimumValue([2,3,5,7,8,10,2] ) );