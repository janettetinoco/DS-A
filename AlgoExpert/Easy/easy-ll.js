class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Remove duplicated from an already sorted linked list
//O(n) time | O(1) space where n is the number of nodes
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextDistinct = currentNode.next
        while (nextDistinct !== null && nextDistinct.value === currentNode.value) {
            nextDistinct = nextDistinct.next
        }
        currentNode.next = nextDistinct;
        currentNode = nextDistinct;

    }
    return linkedList;
}
