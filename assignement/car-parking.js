// car entry inside the parking
 function numberOfCarsEntry (carEntry, arr){

    if( ( carEntry  === true && arr.length >= 0 ) && ( arr.length < 100 ) ){
        arr.push("1");
        return arr;
    }
    else{
        return arr;
    }

}

// car inside the parking


var numberOfCarInsideparking = function (numberOfCarEntry, NumberOfCarExit){
    var arr = [];

    for( var i= 0; i < numberOfCarEntry ; i++){
        if(arr.length === 100){
            break;
        }else {
            arr =   numberOfCarsEntry(true, arr );
        }
    }

    //if exit the car then
     for(var exit = 0; exit < NumberOfCarExit; exit++){
         arr = carExit(true, arr);
     }

    // how many car inside the car
    console.log( "Number of car inside the parking " ,  arr.length );

   if( arr.length >= 100) {
        console.log("No entry ");
   }
   else{
       console.log("space available for", 100 - arr.length + " car");
   }

}

 function carExit (exitCar, arr){
    if( exitCar === true && arr.length > 0 ){
        arr.pop();
    }
     return arr;
}
// car exit

//===========test cases==========


// numberOfCarInsideparking(4,0 );
// numberOfCarInsideparking(0,6);
// numberOfCarInsideparking(0,0);
//  numberOfCarInsideparking("","");
//  numberOfCarInsideparking(-1,0);
//  numberOfCarInsideparking(0,-1);
//  numberOfCarInsideparking(100,0);
 numberOfCarInsideparking(101,1);
 numberOfCarInsideparking(101, 100);
 numberOfCarInsideparking(101,1);



//=====================================
/*

    POST /api/portfolio/performance
Request:
Header jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Header userId: 3fa85f64-5717-4562-b3fc-2c963f66afa6
Header portfolioId: 4fa85f64-5712-1234-b3fc-2c963f66aap1

Response:
{
    "performance": {
    "absolute": {
        "value": "123.456",
            "currency": "USD"
    },
    "relative": {
        "value": "0.05"
    }
}
}
*/


//positive cases

//when we send all the mandatory element in the request
    //  response status code should be "200"
    //validate mandatory element in the response like
    // response.should("have.key","performance");
    // response.should("have.keys","absolute");
    // response.should have absolute.value as a number field
    // response.should have three letter Currency code
    // reponse.should key  as relative
    // response should have relative.key as number

// when we don't one mandatory element
//when we jwt token missing in the request // or wrong jwt token

        //response should throw an error
           // response status code : 401
                        // "invalid input"

//when user id invalid or missing in the request header
            // response code 400 series
           // response should throw an error authentication error

//Header portfolioId: 4fa85f64-5712-1234-b3fc-2c963f66aap1 : missing or invalid
            // response code  400
            // request invalid

// if we send in request header : none above of defined value
            // response code  400
            // request invalid
