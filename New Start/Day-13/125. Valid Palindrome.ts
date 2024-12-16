function isPalindrome(s: string): boolean {
    
    if(s.length ==1 ) return true

    let x = s.split("")
    for(let i =0 ; i < s.length; i++){
        x[i] = isAlphanumeric(x[i]) ? x[i].toLowerCase() : ""
    }
    s = x.join("")
    if(s.length == 0) return true
    if(x.length ==1 ) return false

    let l = 0 
    let r = s.length - 1
    while(l != r && l<r){
        if( s[l] != s[r]) return false
        l++
        r--
    }

    return true 
};
function isAlphanumeric(str) {
  return str.match(/^[a-z0-9]+$/i);
}