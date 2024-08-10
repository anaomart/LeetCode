// not yet

var compress = function(chars) {

    let pointer = 0
    let currentChar = chars[0]
    let Counter = 0
    chars
    chars.splice(0, 1)
    chars
    for (let i = 0; i < chars.length + 1; i++) {
        console.log(chars[i])
        if (chars[i] === currentChar) {
            console.log(chars[i])
            chars
            Counter++

        } else {
            Counter != 1 && (chars[i - 1] = Counter)
            currentChar = chars[i]
            Counter = 1
        }
    }
    chars
};

const chars = ["a", "a", "b", "b", "c", "c", "c"]
console.log(compress(chars))