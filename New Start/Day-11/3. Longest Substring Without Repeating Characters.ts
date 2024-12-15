function lengthOfLongestSubstring(s: string): number {
    let sett = new Set()
    let l =0 
    let r =0
    let max = 0
    while(r < s.length){

        if(!sett.has(s[r])){
            sett.add(s[r++])
        }else if(sett.has(s[r])){
            l++ 
            r=l
            sett.clear()
        }

        max = Math.max(max , sett.size)

    }

 return max

};