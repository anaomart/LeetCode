var maxArea = function(height) {
    let j = height.length - 1
    let max = 0

    for (let i = 0; i < height.length; i++) {
        console.log(i, j, max)
        console.log(height[i], height[j], (j - i - 1))
        const lowest = Math.min(height[i], height[j])

        max = max > lowest * (j - i) ? max : lowest * (j - i)

        if (height[i] > height[j]) {
            j--
            i--
        }
    }
    return max
};

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(nums))