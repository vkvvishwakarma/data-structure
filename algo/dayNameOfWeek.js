function nameOfDay(day, noOfDaysToAdd){
   const name = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
   noOfDaysToAdd = noOfDaysToAdd % name.length;
   var j = 0;
   for (var i = 0; i < name.length; i++){
       if( name[i] === day ){
           j  = (i + noOfDaysToAdd) % name.length;
           return name[j];
       }
   }
}

console.log(nameOfDay("Mon", 3));