function combinationOfNumber(arr){
    var sizeArr = arr.length;
    var count  = 0;
    for(var i = 0; i < sizeArr ; i++){ //i=1 =>2
        for(var j = 0; j < sizeArr; j++){ //j=2 =>3
            for(var k= 0 ; k < sizeArr; k++){// k=3=>4
                for(var l = 0 ; l < sizeArr; l++){ //k=4 =>
                    if( arr[i] !== arr[j] && arr[j]!==arr[k] && arr[k]!==arr[l] && arr[i]!==arr[k] && arr[i]!==arr[l] && arr[j]!==arr[l] ){
                        var combination =  arr[i] + arr[j]+arr[k]+arr[l];
                        count++;
                        console.log(combination);
                    }

                }
            }
        }
    }
console.log("count = "+count);
}

combinationOfNumber(["1","2","3","4","5"]);
// 2134
// 2314
// 2341
// 3124
// 3214
// 4123
// 4213
// 4231
// 1324
// 1342
// 1432