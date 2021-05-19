var runningSum = function (nums) {
    let sum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sum.push(sum[sum.length - 1] + nums[i])
    }
    return sum
};

var defangIPaddr = function (address) {
    let addNew = "";
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            addNew += "[.]"
        } else {
            addNew += address[i]
        }
    }
    return addNew
};

var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach((customer) => {
        let sum = customer.reduce((acc, el) => acc + el)
        if (sum > max) max = sum;
    })
    return max
};

var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    let sol = [];
    for (let i = 0; i < candies.length; i++) {
        if (Math.abs(candies[i] - max) <= extraCandies) {
            sol.push(true)
        } else {
            sol.push(false)
        }
    }
    return sol
};

var shuffle = function (nums, n) {
    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr.push(nums[i], nums[n + i])
    }
    return newArr
};

var numIdenticalPairs = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) { count += 1 }
        }
    }
    return count
};

var numJewelsInStones = function (jewels, stones) {
    const jewls = {};
    jewels.split("").map((jewl) => {
        jewls[jewl] = 1
    })
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewls[stones[i]]) count += 1;
    }
    return count;
};


var ParkingSystem = function (big, medium, small) {
    this.count = [big, medium, small]

};

ParkingSystem.prototype.addCar = function (carType) {
    return this.count[carType - 1]-- > 0
};

var countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                count += 1
            }
        }
    }
    return count
    // grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);
};


var smallerNumbersThanCurrent = function (nums) {
    let sorted = nums.slice().sort((a, b) => a - b)
    let count = []
    for (let i = 0; i < nums.length; i++) {
        count.push(sorted.indexOf(nums[i]))
    }
    return count
};

var reverseStr = function (s, k) {
    let final = ""//ba
    let sArr = s.split("")
    let i = 0;//2
    while (i < s.length) {//abcd
        if (i % (2 * k) === 0 || i === 0) {
            final += sArr.slice(i, i + k).reverse().join("")
            i += k
        } else if (i % k === 0 && i <= s.length - 2) {//2
            final += sArr.slice(i, i + k).join("")
            i += k
        } else if (i >= s.length - 2) {
            final += sArr.slice(final.length)
            break;
        }
    }
    return final
};

var reverseString = function (s) {
    return s.reverse()
};

var singleNumber = function (nums) {
    let n = {}
    nums.map((num) => {
        if (n[num]) {
            n[num] += 1
        } else {
            n[num] = 1
        }
    })
    for (let key in n) {
        if (n[key] === 1) return key;
    }
};


var sortedArrayToBST = function (nums) {
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))

    return root

};

// Given an integer n, return a string array answer(1 - indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
var fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let ans = ""
        if (i % 3 === 0) {
            ans += "Fizz";
        }
        if (i % 5 === 0) {
            ans += "Buzz"
        }
        if (ans.length === 0) {
            ans += `${i}`
        }
        answer.push(ans)
    }
    return answer
};

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
var isAnagram = function (s, t) {
    let letters = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (letters[char]) {
            letters[char] += 1
        } else {
            letters[char] = 1
        }
    }
    for (let j = 0; j < t.length; j++) {
        let char = t[j]
        if (letters[char]) {
            letters[char] -= 1
        } else {
            letters[char] = -1
        }
    }
    return Object.keys(letters).every((k) => letters[k] === 0)
};

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).
//     Note: You may not engage in multiple transactions simultaneously(i.e., you must sell the stock before you buy again).

var maxProfit = function (prices) {
    let profit = 0;//currentprofit
    for (let i = 0; i < prices.length - 1; i++) {//iteratiing through the days
        let tempProf = prices[i + 1] - prices[i]; //checking the current profit
        profit = Math.max(profit, tempProf + profit) //pprofit will only be replaced if the current profit will add to the overall profit
    }
    return profit
};

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in -place without making a copy of the array.

var moveZeroes = function (nums) {
    let indx = 0;
    let count = 0;
    while (indx < nums.length - 1) {
        if (nums[indx] === 0) {
            nums.splice(indx, 1)
            indx -= 1
            count += 1
        }
        indx += 1
    }
    for (let repeat = 1; repeat <= count; repeat++) {
        nums.push(0)
    }
    return nums
};


// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function (nums) {
    let seen = {};
    nums.forEach((number) => {
        if (seen[number]) {
            seen[number] += 1
        } else {
            seen[number] = 1
        }
    })
    return Object.keys(seen).some((key) => seen[key] >= 2)
};

//better solution
var containsDuplicate = function (nums) {
    return nums.length !== new Set(nums).size
};


//Given a Roman Numeral convert to Int
var romanToInt = function (s) {//MCMXCIV
    let total = 0;//1994
    const convert = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const specCases = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    for (let indx = 0; indx < s.length; indx++) {//6
        let pair = s.slice(indx, indx + 2)//IV
        if (specCases[pair]) {
            total += specCases[pair]
            indx++
        } else {
            total += convert[s[indx]]
        }
    }
    return total
};


//shuffle the string based on the indices
//Time O(n) | Space O(n)
var restoreString = function (s, indices) {
    let finalString = new Array(s.length);
    for (let i = 0; i < indices.length; i++) {
        finalString[indices[i]] = s[i]
    }
    return finalString.join("")
};