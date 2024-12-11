function maxVowels(s: string, k: number): number {
    let counter = 0 
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i =0 ; i < k; i++){
        if( vowels.has(s[i]) ){
                counter++
            }
    }
    let max = counter 
    // counter = a

    for(let i =k; i< s.length; i++){

       
            
            
            if(vowels.has(s[i])) counter++ 
            
            
            
            
            if(vowels.has(s[i-k])) counter--
            
            
            max = Math.max(max, counter);

        
        
    }



    return max 

}