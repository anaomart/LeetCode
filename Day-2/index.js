var mergeAlternately = function(word1, word2) {
    let counter1 = 0
    let counter2 = 0
    const result = []
    const length = word1.length + word2.length

    for (let i = 0; i < length; i++) {
        i
        if ((i % 2 === 0 && word1[counter1]) || (word1.length > word2.length && !word2[counter2])) {
            i
            result.push(word1[counter1])
            counter1++
        } else if (i % 2 !== 0 && word2[counter2] || (word2.length > word1.length && !word1[counter1])) {
            result.push(word2[counter2])
            counter2++
        }
    }
    return result.join('')
};

// another solution
var mergeAlternately1 = function(word1, word2) {
    let result = '';
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result;
};
console.log(mergeAlternately('abdadsf', 'cv'))
console.log(mergeAlternately1('abdaadsf', 'cv'))