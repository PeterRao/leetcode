/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var res = nums[0];
    for (var i=nums.length; i > 1; i--) {
        res = res ^ nums[i-1];
    }
    return res;
};

module.exports = singleNumber;