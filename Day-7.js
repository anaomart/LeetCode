var productExceptSelf = function(nums) {

};


console.log(productExceptSelf([1, 2, 3, 4]))

function divide(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    let quotient = 0;
    let sign = 1;

    // Determine the sign of the result
    if (dividend < 0) {
        sign = -sign;
        dividend = -dividend;
    }
    if (divisor < 0) {
        sign = -sign;
        divisor = -divisor;
    }

    while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }

    return sign * quotient;
}

console.log(divide(10, 5))