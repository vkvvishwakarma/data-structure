function singleNumber(arr){
    var  map = new Map();
    var oddNumber = [];
    for (var i = 0; i < arr.length; i++){
       // console.log(!map.has(arr[i])+" => i = "+i);
        if(!map.has(arr[i])) {
            map.set(arr[i], 0);
          //  console.log(map);
        }
            map.set(arr[i], map.get(arr[i])+1)
    }
    console.log(map);
    for(let [mapKey, mapValue] of map.entries()){
        if(mapValue === 1){
            oddNumber.push(mapKey);
            console.log(oddNumber);
            return mapKey;
        }
    }
}

singleNumber([201]);
