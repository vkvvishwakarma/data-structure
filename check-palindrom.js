/**
 * @param {number} x
 * @return {boolean}
 */

var checkPalindrome = function(str) {

    var len = str.length;
    var mid = Math.floor(len/2);
    var bFlag = true
    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            bFlag = false;
            console.log(bFlag);
            return bFlag;
        }
    }
    console.log(bFlag);
    return bFlag;

};

checkPalindrome("121");