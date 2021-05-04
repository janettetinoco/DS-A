//return sum of deepest leaves
//deepest leaves 7 and 8
var deepestLeavesSum = function (root, arr = [], depth = 0) {
    if (root === null) return;//base case

    arr[depth] = (arr[depth] || 0) + root.val;//assigns sum at depth
    deepestLeavesSum(root.left, arr, depth + 1);//recursive on left
    deepestLeavesSum(root.right, arr, depth + 1);//recursive on right

    return arr[arr.length - 1];
};


//Given two binary trees original and cloned and given a reference to a node target in the original tree.
//The cloned tree is a copy of the original tree.
//Return a reference to the same node in the cloned tree.
var getTargetCopy = function (original, cloned, target) {
    if (!original && !cloned) return;
    if (original === target) return cloned;
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)

};


//DFS using Recursion
var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
//BFS(LevelOrder)
var maxDepth = function (root) {
    if (!root) return 0;
    // using BFS and counting levels
    // not recommended to use array as queue
    let levels = 0, queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let count = queue.length;

        for (let i = 0; i < count; i++) {
            const node = queue.shift();
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);

        }
        levels++;
    }
    return levels;
};

var levelOrder = function (root, arr = [], c = 0) {
    if (!root) return arr;
    if (arr.length - 1 < c)
        arr.push([]);
    arr[c].push(root.val);
    levelOrder(root.left, arr, c + 1);
    levelOrder(root.right, arr, c + 1);
    return arr;
};