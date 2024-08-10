// not yet
var maxOperations = function(nums, k) {
    let used = []
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (used.includes(i)) continue
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == k && !used.includes(i) && !used.includes(j) && i != j) {
                used.push(i, j)
                counter += 1
            }
        }
    }
    return counter
};
const nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4]

const k = 2


console.log(maxOperations(nums, k)); // Output: 3