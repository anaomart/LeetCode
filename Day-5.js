var canPlaceFlowers = function(array, n) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (!!array[i - 1] + !!array[i] + !!array[i + 1] === 0) {
            array[i] = 1;
            counter++;
        }
    }
    return counter >= n;
};
const array = [0, 0, 1, 0, 1];

console.log(canPlaceFlowers(array, 1));