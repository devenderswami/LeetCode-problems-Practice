/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp = l1;
    let temp2 = l2;
    let temp3 = new ListNode(0);
    let curr = temp3;
    let carry = 0;

    while (temp !== null || temp2 !== null || carry !== 0) {
        let val = temp !== null ? temp.val : 0;
        let val2 = temp2 !== null ? temp2.val : 0;
        let sum = val + val2 + carry;
        carry = Math.floor(sum / 10);

        // Create a new ListNode with the sum value
        let newNode = new ListNode(Math.floor(sum % 10));
        curr.next = newNode;

        // Move to the next node in the result linked list
        curr = curr.next;

        if (temp !== null) {
            temp = temp.next;
        }
        if (temp2 !== null) {
            temp2 = temp2.next;
        }
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return temp3.next;
};