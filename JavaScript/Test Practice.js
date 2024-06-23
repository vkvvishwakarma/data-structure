if(!Object.is || true)
{
    object.is = function ObjectIs(x,y){
    var xNegZero =  isNegZero(x) ;
    var yNegZero =  isNegZero(y);
    if(xNegZero || yNegZero){
        return xNegZero && yNegZero;
    }else if(isItNan(x) && isItNan(y)){
        return true;
    }
    else if(x===y)
    {
        return true;
    } else{
        return false;
    }


    //********************//
    function isNegZero(v){
    return v==0 && (1/v) == - infinitive;
    }
    function isItNan(x){
        return x !== x;
    }

    };

 }