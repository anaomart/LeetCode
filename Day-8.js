function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }

    return false;
}

nums = [20, 100, 10, 12, 5, 13]
    // i don't like this solution , it don's satisfy the condition i > j> > k
console.log(increasingTriplet(nums));