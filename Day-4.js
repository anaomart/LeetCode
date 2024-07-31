var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    return candies.map((kid) => kid + extraCandies >= max)
};


console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))