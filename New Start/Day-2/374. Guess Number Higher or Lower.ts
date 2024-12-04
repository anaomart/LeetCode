/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


 function guessNumber(n: number): number {
    let s = 1
    let e = n
   
    while(e >= s){
    let m = Math.floor(s + (e- s )/2 )

        if(guess(m) == 0) return m
        if(guess(m) == 1 ){
            s = m + 1
        }else if(guess(m) == -1) {
            e = m -1
        }

    }

};