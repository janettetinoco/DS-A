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

//Move all instances of toMove in the array to the end. manipulate the array
//Time O(n) | Space O(1) 
function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0;
    let j = array.length - 1
    while (i < j) {
        if (array[i] === toMove && array[j] !== toMove) {
            [array[i], array[j]] = [array[j], array[i]]
        } else if (array[j] === toMove && array[i] === toMove) {
            j -= 1
        } else if (array[i] !== toMove && array[j] !== toMove) {
            i += 1
        } else {
            j -= 1
        }
    }
    return array
}

//Time O(n) | Space O(1)
function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        while (i < j && array[j] === toMove) j--;
        if (array[i] === toMove) {
            [array[i], array[j]] = [array[j], array[i]];
        }
        i++
    }
    return array
}

//Find the firs non-repeating character and return the index
//Time O(n^2) | Space O(1) 
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
        let currChar = string[i]
        let found = false;
        for (let j = 0; j < string.length; j++) {
            if (string[j] === currChar && i !== j) {
                found = true
            };
        }
        if (!found) return i
    }
    return -1
}
//Optimized
// Time O(n) | Space O(1)-because hash map has max length 26
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let collection = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (!collection[char]) {
            collection[char] = 1
        } else {
            collection[char] += 1
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (collection[string[i]] === 1) return i
    }
    return -1;
}