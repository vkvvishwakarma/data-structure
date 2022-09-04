/**
 * @param {string} x
 * @return {boolean}
 */

var longestPalindrome = function(str) {

    var len = str.length;
    var mid = Math.floor(len/2);
    var bflag = true;
    for ( var i = 0; i < mid; i++ ) {

        if (str[i] !== str[len - 1 - i]) {
            bflag = false;
            return false;
        }
    }
    return bflag;
};

longestPalindrome("1221");