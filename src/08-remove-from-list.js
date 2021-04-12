/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let arr = l;
  while (arr.value === k) {
    arr = arr.next;
  }
  let listNode = arr;
  let currentNode = arr.next;
  while (currentNode) {
    if (currentNode.value === k) {
      listNode.next = currentNode.next;
      currentNode = listNode.next;
    } else {
      listNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return arr;
}

module.exports = removeKFromList;
