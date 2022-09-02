/**
 * @param {number} x
 * @return {boolean}
 */

var longestPalindrome = function(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            console.log(false);
            return false;
        }
    }
console.log(true);
    return true;

};

longestPalindrome(1221);