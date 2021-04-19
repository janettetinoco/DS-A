//TwoSum
function twoNumberSum(array, targetSum) {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]]
            }
        }
    }
    return []
}


//Find if sequunce is a subseqeunce of array
function isValidSubsequence(array, sequence) {
    // Write your code here.
    if (sequence.length === 0) return true;
    if (array.length === 0) return false;
    if (array[0] === sequence[0]) {
        array = array.slice(1);
        sequence = sequence.slice(1);
    } else {
        array = array.slice(1);
    }
    return isValidSubsequence(array, sequence);
}

//O(n) time | O(1) space
function isValidSubsequence1(array, sequence) {
    // Write your code here.
    let currIdx = 0;
    let otherIdx = 0;
    while (currIdx < array.length && otherIdx < sequence.length) {
        if (array[currIdx] === sequence[otherIdx]) {
            otherIdx++
            currIdx++
        } else {
            currIdx++
        }
    }
    return otherIdx === sequence.length
}
