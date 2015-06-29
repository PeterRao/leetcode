class Solution:
    # @param {integer[]} prices
    # @return {integer}
    def maxProfit(self, prices):
        l = len(prices)
        res = [0] * l
        if l == 0 or l == 1:
            return 0
        for i in range(1, l):
            diff = prices[i] - prices[i-1]
            res[i] = diff + res[i-1] if diff > 0 else res[i-1]
        return res[l-1]
