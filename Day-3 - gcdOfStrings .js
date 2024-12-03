// couldn't solve it in the first try
var gcdOfStrings = function(str1, str2) {
    if (str1 == str2) return str1;
    if (str1 + str2 !== str2 + str1) return ''
    let pointerOne = ''
    let pointerTwo = ''
    if (str1.length < str2.length) {
        str1 = [str2, str2 = str1][0];
    }
    let found = []
    console.log(str1)

    for (let i = 0; i < str1.length / 2; i++) {
        i
        pointerOne += str1[i]

        pointerTwo = str1[str1.length - 1 - i] + pointerTwo

        if (pointerOne === pointerTwo) {
            // (pointerOne.length  > 1 || str1.length > 3 )  &&
            if (str1.length > 3) {

                pointerOne.length > 1 && found.push(pointerOne)
            } else {
                found.push(pointerOne)
            }

        }
    }
    console.log(found.at(-1).length)
    console.log(str2.length)
    if (found.length === 0 || !str1.startsWith(found[0]) || !str2.endsWith(found[0]) || !str2.startsWith(found[0]) || !str1.endsWith(found[0])) return ""
    console.log(str1.split(found.at(-1)).join(''))
    return !str1.split(found.at(-1)).join('') ? found.at(-1) : found.at(0)
};
str1 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    str2 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

console.log(gcdOfStrings(str1, str2))