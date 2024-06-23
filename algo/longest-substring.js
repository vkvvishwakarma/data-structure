var lengthOfLongestSubstring = function (str){
    var leftPointer = 0;
    var longestLength = 0;
    const charMap = new Map();
    for( var rightPointer = 0; rightPointer < str.length-1; rightPointer++ ){
        const currentChar = str[rightPointer];
        const preCharIndex = charMap.get(currentChar);
        console.log(currentChar);
        console.log(preCharIndex);
        if(preCharIndex >= leftPointer ){
            leftPointer = preCharIndex + 1;
            console.log(rightPointer + " time become true"  );
        }
        charMap.set(currentChar, rightPointer);
        console.log( "values set to map "+ currentChar +"=>"+ rightPointer);
        let curLength = rightPointer - leftPointer + 1;
        longestLength =  Math.max(curLength, longestLength);
    }
    console.log(longestLength);
    return longestLength;


    //1 create left pointer and assign it to 0
    //2 create a longest length variable and assigned it to 0
    //3 create charMap{} to keep track of character and their index
    //4 loop through str with the right pointer
    //      a.  create currentChar variable str[rightPointer]
    //      b. create prevCharIndex variable charMap.get(currentChr)
    //      c. if (prevCharIndex >= leftPointer)
    //          update the leftPointer to preCharIndex +1
    //      update charMap with currentChar and rightPointer
    //      find the length b/w pointers

}

lengthOfLongestSubstring("ascdas")