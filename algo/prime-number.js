function isPrime(num) {
    if(num == 1) {
        console.log(true);
        return true
    }
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = (num !== 1);

    for( var i=2; i < sqrtnum + 1; i++ ) { // sqrtnum+1
        if(num % i === 0) {
            prime = false;
            break;
        }
    }
    console.log(prime);
    return prime;
}

isPrime(1);