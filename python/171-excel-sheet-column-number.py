class Solution:
    # @param {string} s
    # @return {integer}
    def titleToNumber(self, s):
        res = 0
        for chr in s:
            res = res * 26 + ord(chr) - 64
        return res
