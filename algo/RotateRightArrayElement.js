function Rotate(arr, numRotate){
    var aarLength = arr.length;
    var numRotate = numRotate % aarLength;
    for(var i = 0 ; i < aarLength; i++){
       console.log(" array index = "+i);
        if(i < numRotate){
            console.log(arr[aarLength + i - numRotate]);
        }else{
            console.log(arr[ i - numRotate]);
        }
    }
}
Rotate([1,2,3,4,5,6],2);