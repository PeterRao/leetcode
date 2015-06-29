/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    var leftMax, rightMax;
    if (!root) {
        return 0;
    }
    leftMax = maxDepth(root.left);
    rightMax = maxDepth(root.right);
    return (leftMax > rightMax ? leftMax : rightMax) + 1;
};

module.exports = maxDepth;