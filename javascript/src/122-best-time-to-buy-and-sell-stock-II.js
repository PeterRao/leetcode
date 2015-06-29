/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var diff, len = prices.length, res = [];
    if (!len) {
        return 0;
    }
    res[0] = 0;
    for (var i=1; i < len; i++) {
        diff = prices[i] - prices[i-1];
        res[i] = diff > 0 ? (res[i-1] + diff) : res[i-1];
    }
    return res[len-1];
};