//Three number sum
//keep track of left and right pointer in sorted array
//Time O(n ^ 2) | Space O(n)

function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    let threes = [];
    for (let i = 0; i < array.length - 2; i++) {
        let current = array[i]
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let sum = current + array[left] + array[right]
            if (sum === targetSum) {
                threes.push([current, array[left], array[right]])
                left += 1
                right -= 1
            } else if (sum < targetSum) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return threes
}

//Find smallest differnce between elements in the array
//Time O(n^2) | Space O(1)
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let difference = Infinity;
    let pair = [];
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            let tempDiff = Math.abs(arrayOne[i] - arrayTwo[j])
            if (tempDiff < difference) {
                difference = tempDiff
                pair = [arrayOne[i], arrayTwo[j]]
            }
        }
    }
    return pair
}

//Time O(mlog m + nlogn) | Space O(1)
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    let indx1 = 0;
    let indx2 = 0;
    let difference = Infinity;
    let pair = []
    while (indx1 < arrayOne.length && indx2 < arrayTwo.length) {
        let left = arrayOne[indx1];
        let right = arrayTwo[indx2];
        let tempDiff = Math.abs(left - right)
        if (tempDiff < difference) {
            difference = tempDiff;
            pair = [left, right]
            left < right ? indx1 += 1 : indx2 += 1
        } else {
            left < right ? indx1 += 1 : indx2 += 1
        }
    }
    return pair
}