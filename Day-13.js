// var findMaxAverage = function(nums, k) {
//     let max = [...nums].splice(0,k).reduce((a, b) => a + b, 0);
// for(let i =0 ; i < nums.length ; i++){
//         let total =0
//         for(let j=0 ; j<k ;j++){
//             total+=nums[j+i]
//         }
//         if(max < total) max= total
//     }
//     return max / k
// }
// const nums = [0,1,1,3,3]
// const k = 4
// console.log(findMaxAverage(nums, k))


var findMaxAverage = function(nums, k) {

    let max = 0
    for (let i = 0; i < k; i++) {
        max += nums[i];
    }
    let currentSum = max
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i] + nums[i - k]
        max = Math.max(max, currentSum)
    }
    return max / k
}

// var findMaxAverage = function(nums, k) {
//     let maxSum = 0;
//     for (let i = 0; i < k; i++) {
//         maxSum += nums[i];
//     }
//     ///////////
//     let currentSum = maxSum;

//     for (let i = k; i < nums.length; i++) {
//         currentSum += nums[i] - nums[i - k]; // Slide the window by adding the new element and subtracting the old one
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum / k;
// }
const nums = [1, 12, -5, -6, 50, 3]

const k = 4
console.log(findMaxAverage(nums, k))