var reverseWords = function(s) {
    console.log(s.split(" ").filter(x => x !== "").reverse().join(" ").trim())
};
s = "a good   example"
console.log(reverseWords(s))