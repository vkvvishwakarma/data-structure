const unique = function(arr){
    if(arr.length ===0){
        return arr;
    }
    arr.sort((a,b)=>{ return a - b });
    const result =[arr[0]];
    for(var i = 1; i< arr.length;i++){
        if(arr [i-1] !== arr[i]){
            result.push(arr[i]);
        }
    }
    return result.sort((a,b)=>{return  a - b;});
}

unique([4,3,2,5,2,4,1,3,5,2]);