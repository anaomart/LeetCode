var canConstruct = function(ransomNote, magazine) {
    const magazineHahs = countChars(magazine)
    const ransomNoteHahs = countChars(ransomNote)

    for (let i = 0; i < Object.entries(ransomNoteHahs).length; i++) {
        const r = Object.entries(ransomNoteHahs)[i]

        if (!magazineHahs[r[0]] || magazineHahs[r[0]] < r[1]) return false


    }

    return true

};

function countChars(Object) {
    const ObjectHash = {}
    Object.split('').forEach(char => {
        if (ObjectHash[char]) {
            ObjectHash[char]++
        } else {
            ObjectHash[char] = 1
        }
    })
    return ObjectHash
}

console.log(canConstruct('abhcf', 'abhcahhasdfasasf'))


// Second solution 
var canConstruct1 = function(ransomNote, magazine) {
    for (const char of magazine) {
        ransomNote = ransomNote.replace(char, "");
    }
    if (!ransomNote) return true;
    else return false;
};
return false;