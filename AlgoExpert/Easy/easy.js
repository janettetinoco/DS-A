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

//Return sorted array of squares of given array
//O(nlogn) time |o(n) space
function sortedSquaredArray(array) {
    // Write your code here.
    let squares = [];
    array.map((ele) => {
        squares.push(ele * ele)
    })
    return squares.sort((a, b) => a - b);
}

//Tournament winner
//O(n) time |O(k) space, n is competitions, k is teams
function tournamentWinner(competitions, results) {
    // Write your code here.
    let scores = {};
    for (let i = 0; i < competitions.length; i++) {
        let winner = competitions[i][0];
        if (results[i] === 1 && scores[winner]) {
            scores[winner] += 3
        } else if (results[i] === 1) {
            scores[winner] = 3
        } else if (scores[competitions[i][1]]) {
            scores[competitions[i][1]] += 3
        } else {
            scores[competitions[i][1]] = 3
        }
    }
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
}

//Find lest amount that can be constructed from give change array
//O(nlogn) time |O(1) space
function nonConstructibleChange(coins) {
    // Write your code here.
    if (coins.length === 1 && coins[0] !== 1) return 1;
    let sortedCoins = coins.sort((a, b) => a - b);
    let minChange = 0;
    for (let i = 0; i < sortedCoins.length; i++) {
        minChange += sortedCoins[i]
        if (sortedCoins[i + 1] > minChange + 1) {
            return minChange + 1;
        }
    }

    return minChange += 1;
}
//find nth fibonacci number: 0,1,1,2,3,5,...
//O(2^n) time | O(n) space
function getNthFib(n) {
    // Write your code here.
    if (n <= 1) return 0;
    if (n === 2) return 1;
    return getNthFib(n - 1) + getNthFib(n - 2);
}

//using memoization
//O(n) time | O(n) space
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
    // Write your code here.
    if (memoize[n] !== undefined) {
        return memoize[n];
    } else {
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
        return memoize[n];
    }
}

//Add up all elements of an array multiplying by the depth of the array for each element
//O(n) time | O(d) space where n is elments in array, d is the greatest depth
function productSum(array, level = 1) {
    // Write your code here.
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += productSum(array[i], level + 1)
        } else {
            sum += array[i];
        }
    }
    return sum * level;
}


//Binary Search
//O(logn) time | O(log n) space
function binarySearch(array, target) {
    // Write your code here.
    if (array.length === 0) return -1
    let mid = Math.floor(array.length / 2);
    if (array[mid] === target) {
        return mid
    } else if (array[mid] > target) {
        return binarySearch(array.slice(0, mid), target)
    } else {
        let result = binarySearch(array.slice(mid + 1), target)
        if (result === -1) {
            return -1
        } else {
            return result + mid + 1
        }
    }   
}

//Find the 3 largest nubers in a given array
//O(n log n) time | O(n log n) space
function findThreeLargestNumbers(array) {
    // Write your code here.
    let maxArray = array.slice(0, 3).sort((a, b) => a - b);
    for (let i = 0; i < array.length - 3; i++) {
        let remainingArray = array.slice(3);
        if (remainingArray[i] > maxArray[0]) {
            maxArray.push(remainingArray[i])
            maxArray = maxArray.slice(1).sort((a, b) => a - b)
        }
    }
    return maxArray

}

//Arrange two rows of students so all students in second row are taller than the first row
//O(nlogn) time | O(1) space
function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    redShirtHeights = redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);
    let redFront = redShirtHeights[0] - blueShirtHeights[0] <= 0
    for (let i = 0; i < redShirtHeights.length; i++) {
        if (redShirtHeights[i] <= blueShirtHeights[i] && !redFront) {
            return false
        } else if (redShirtHeights[i] >= blueShirtHeights[i] && redFront) {
            return false
        }
    }
    return true;
}

//Tandem Bike: find the fastest or slowest total speeds of tandem bikers
//O(nlogn) time | O(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
    if (!fastest) {
        blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)
    } else {
        blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => b - a)
    }
    let time = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++) {
        if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
            time += redShirtSpeeds[i];
        } else {
            time += blueShirtSpeeds[i];
        }
    }
    return time;
}
