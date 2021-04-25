class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//calculate branch sums and rrturn array starting from left to right
//O(n) time because we are going n number of nodes iterations 
//O(n) space because it is the boundary, the number of nodes is half the number of leaves so n/2  = n
function calculateBranchSums(node, sum, sums) {
    if (node === null) return sums
    let newSum = sum + node.value;
    if (node.left === null && node.right === null) {
        sums.push(newSum)
    }
    calculateBranchSums(node.left, newSum, sums)
    calculateBranchSums(node.right, newSum, sums)
}

function branchSums(root) {
    // Write your code here.
    let sums = [];
    calculateBranchSums(root, 0, sums)
    return sums

}

//Calculate the sum of depths of the BST
//Recursively
//O(n) n is the bumebr of nodes | O(d) time where d is the depth of the tree
function nodeDepths(root, depth = 0) {
    // Write your code here.
    if (root === null) return 0
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

//Iteratively
//O(n) n is the bumebr of nodes | O(d) time where d is the depth of the tree
function nodeDepths(root) {
    // Write your code here.
    let totalDepths = 0;
    const nodeStack = [{ node: root, depth: 0 }]
    while (nodeStack.length > 0) {
        const { node, depth } = nodeStack.pop();
        if (node === null) continue;
        totalDepths += depth;
        nodeStack.push({ node: node.left, depth: depth + 1 })
        nodeStack.push({ node: node.right, depth: depth + 1 })
    }
    return totalDepths
}
