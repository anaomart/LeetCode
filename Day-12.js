var pivotIndex = function(nums) {

    const result = { left: [], right: [], pivotIndex: [] }
    for (let i = 0; i < nums.length; i++) {

        let left = 0
        let right = 0
        const pivot = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[j], j);
            right += nums[j]
            right
        }

        for (let j = i - 1; j >= 0; j--) {

            left += nums[j]
            left
        }
        if (left == right) return i
    }


};
nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))