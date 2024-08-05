// var moveZeroes = function(nums) {
//     const len = nums.length;
//     nums = nums.filter(x => x !== 0)
//     const zeroCount = len - nums.length;
//     for (let i = 0; i < zeroCount; i++) nums.push(0)
//     return nums
// };
const nums = [0, 1, 0, 0, 3, 0, 0, 12]
var moveZeroes = function(nums) {
    const len = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            (nums.splice(i, 1))
            i--
        }
    }
    for (let i = 0; i < len - nums.length; i++) {
        nums.push(0)
        i--
    }
    return nums
};
console.log(moveZeroes(nums))