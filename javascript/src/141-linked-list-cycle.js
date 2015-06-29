/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next || !head.next.next) {
        return false;
    }
    var fast = head.next.next, slow = head.next;
    while(fast !== slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return !!fast && !!fast.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a1 = new ListNode('a1');
var a2 = new ListNode('a2');
var a3 = new ListNode('a3');

a1.next = a2;
//a2.next = a3;
//a3.next = a1;

hasCycle(a1);


