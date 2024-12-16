function closeStrings(word1: string, word2: string): boolean {
    
    let hashOne = {}
    let hashTwo = { }

    if(word1.length !== word2.length ) return false


    for(let i =0 ; i<word1.length ; i++){

        if(hashOne[word1[i]]) hashOne[word1[i]]++
        else hashOne[word1[i]] = 1

        if(hashTwo[word2[i]]) hashTwo[word2[i]]++
        else hashTwo[word2[i]] = 1
    }

        const obj = Object.values(hashTwo).sort()
        const obj1 = Object.values(hashOne).sort()
        const objKeys = Object.keys(hashTwo).sort()
        const obj1Keys = Object.keys(hashOne).sort()
        let biggerLen = Math.max(obj.length ,obj1.length)
        console.log({obj,obj1})
        for(let i =0 ; i< biggerLen; i++){
        if(obj[i] != obj1[i]) return false
        let keysAreTheSame = objKeys.indexOf(obj1Keys[i])
        if( keysAreTheSame == -1) return false
    }
    return true

};