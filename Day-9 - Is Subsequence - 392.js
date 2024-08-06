var isSubsequence = function(s, t) {
    let searchCounter = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[searchCounter]) {
            searchCounter++

        }
    }
    return searchCounter == s.length
};

console.log(isSubsequence('abc', 'ahbgdc'))