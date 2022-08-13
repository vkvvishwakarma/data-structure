function binarySearch (list, item){
// list should be sorted
    var min;
    var max = list.lenght -1 ;
    var guess;

    while( min <= max ){
        guess = Math.floor((min+max) /2 );

        if(list[guess] === item){
            return guess;
        }else {
            if(list[guess] < item){
                min = guess + 1
            } else{
                max = guess - 1;
            }
        }
    }
    return -1;

}

console.log(binarySearch([20,24, 40,50,59,64,74],50));