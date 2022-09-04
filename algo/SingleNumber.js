function singleNumber(arr){
    var  map = new Map();
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
            console.log("key = " + mapKey +" => value = "+ mapValue);
            return mapKey;
        }
    }
}

singleNumber([12,3,12,3,7,5,2,5,2]);
