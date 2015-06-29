/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length, sq = [], i;
    var res = s.charCodeAt(len-1) - 64;
    sq[0] = 1;
    console.log(sq);
    for (i=len-2; i <= 0; i--) {
        sq[i] = sq[i+1] * 26;
        res += (s.charCodeAt(i) - 64) * sq[i];
    }
    return res;
};