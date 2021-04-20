//Binary Search Tree Construction
//Best: O(logn) time & O(logn) space | Worst: O(n) time & O(n) space
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    //O(log(n) time | O(1) space
    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        let current = this;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = new BST(value)
                    break;
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = new BST(value)
                    break;
                } else {
                    current = current.right
                }
            }
        }
        return this;
    }

    contains(value) {
        // Write your code here.
        let current = this;
        while (current !== null) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    remove(value, parent = null) {
        // Write your code here.
        // Do not edit the return statement of this method.
        let current = this;
        while (current !== null) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                if (current.left !== null && current.right !== null) {
                    current.value = current.right.getMinValue()
                    current.right.remove(current.value, current)
                } else if (parent === null) {
                    if (current.left !== null) {
                        current.value = current.left.value;
                        current.right = current.left.right;
                        current.left = current.left.left;
                    } else if (current.right !== null) {
                        current.value = current.right.value;
                        current.left = current.right.left;
                        current.right = current.right.right
                    } else {
                        // current.value = null;
                    }
                } else if (parent.left === current) {
                    parent.left = current.left !== null ? current.left : current.right
                } else if (parent.right === current) {
                    parent.right = current.left !== null ? current.left : current.right
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        let current = this;
        while (current.left !== null) {
            current = current.left
        }
        return current.value
    }
}
