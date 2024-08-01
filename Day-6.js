var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const letters = []

    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            letters.push({
                letter: s[i],
                index: i
            })
        }
    }
    let result = s.split('')
    for (let i = 0; i < letters.length; i++) {
        result[letters[letters.length - 1 - i].index] = letters[i].letter
    }

    return result.join('')
};

console.log(reverseVowels('hello'));