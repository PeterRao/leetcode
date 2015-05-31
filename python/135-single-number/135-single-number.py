class Solution:
    # @param {integer[]} nums
    # @return {integer}
    def singleNumber(self, nums):
        res = nums[0]
        for i, el in enumerate(nums):
            if i > 0:
                res = res ^ el
            else:
                res = el
        return res