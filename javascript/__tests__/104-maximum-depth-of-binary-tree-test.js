jest.dontMock('../src/104-maximum-depth-binary-tree-test.js');

/**
 *      a1
 *     / \
 *    a2 a3
 *   /\
 *  a4 a5
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a1 = new TreeNode('a1');
var a2 = new TreeNode('a2');
var a3 = new TreeNode('a3');
var a4 = new TreeNode('a4');
var a5 = new TreeNode('a5');
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;

var b1 = new TreeNode('b1');
var b2 = new TreeNode('b2');
var b3 = new TreeNode('b3');
var b4 = new TreeNode('b4');
var b5 = new TreeNode('b5');
b1.left = b2;
b1.right = b3;
b2.left = b4;
b2.right = b5;

describe('Maxinum Depth of Binary Tree', function() {
    var maxDepth = require('../src/104-maximum-depth-binary-tree-test.js');
    it('test a', function() {
        expect(maxDepth(a1).toBe(3));
    })
});