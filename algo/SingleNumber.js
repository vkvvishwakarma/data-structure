function singleNumber(arr){
    var  map = new Map();
    var oddNumber = [];
    for (var i = 0; i < arr.length; i++){
       // console.log(!map.has(arr[i])+" => i = "+i);
        if(!map.has(arr[i])) {
            map.set( arr[i] , 0 );
          //  console.log(map);
        }
            map.set(arr[i], map.get(arr[i]) + 1 ) // increase the value of one
    }
    console.log(map);

    for(let [mapKey, mapValue] of map.entries() ){
        if(mapValue === 1){
            oddNumber.push(mapKey);
            console.log(oddNumber);
            return mapKey;
        }
    }
}

singleNumber([201,302,303,2002,201, 303,303,303,2002,2002,200]);
