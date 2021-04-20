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