// function reverseString(stringName){
//     console.log( stringName.split("").reverse().join(""));
// }


function reversalString( strName ){
    if(!strName || typeof strName !=="string"){
        return "not valid"
    }
    var result = [];
    for(var i = strName.length-1; i >= 0; i-- ){
        result.push(strName[i]);
    }
    console.log(result.join(""))
}

reversalString("1234");