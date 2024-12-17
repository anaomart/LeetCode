function isSubsequence(s: string, t: string): boolean {
    let counter = 0
    
    for(let i= 0 ; i< t.length ; i++){  
          let currChar = s[counter]

             if(counter == s.length ){
            return true
        }

        if(currChar == t[i]){
            counter++
        }

    }
    if(counter == s.length ){
            return true
        }
return false
};