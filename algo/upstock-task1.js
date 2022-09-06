function findMinimumValue(arr){
    var firstIndexvalue = arr[0];
    for (var i =0; i<arr.length;i++){
        if(firstIndexvalue >  arr[i]){
            firstIndexvalue = arr[i];
        }
    }
    return firstIndexvalue;
}

console.log(findMinimumValue([2,3,5,1,7,8,10]));