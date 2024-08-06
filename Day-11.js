var findDifference = function(nums1, nums2) {
    const first = new Set();
    const second = new Set();

    for (let i = 0; i < (nums2.length); i++) {
        if (nums1.indexOf(nums2[i]) == -1) {
            first.add(nums2[i])
        }
    }
    for (let i = 0; i < (nums1.length); i++) {

        if (nums2.indexOf(nums1[i]) == -1) {
            second.add(nums1[i])
        }
    }


    return [
        [...second],
        [...first]
    ]
};
console.log(findDifference([1, 2, 3], [2, 4, 4, 6]))