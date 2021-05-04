//return sum of deepest leaves
//deepest leaves 7 and 8
var deepestLeavesSum = function (root, arr = [], depth = 0) {
    if (root === null) return;//base case

    arr[depth] = (arr[depth] || 0) + root.val;//assigns sum at depth
    deepestLeavesSum(root.left, arr, depth + 1);//recursive on left
    deepestLeavesSum(root.right, arr, depth + 1);//recursive on right

    return arr[arr.length - 1];
};

var getTargetCopy = function (original, cloned, target) {
    if (!original && !cloned) return;
    if (original === target) return cloned;
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)

};