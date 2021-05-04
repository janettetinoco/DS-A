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
