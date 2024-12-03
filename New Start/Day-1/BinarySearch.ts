export default function binary_search(haystack: number[] , needle: number){
    let start = 0
    let end = haystack.length
    for(let i = 0 ; i <= haystack.length; i++){
        let middle = Math.floor((end + start) /2)

        let TestNeedle = haystack[middle]
        if(TestNeedle == needle) 
            return [TestNeedle]
        if(TestNeedle > needle){
            end = middle
        }else if (TestNeedle < needle){
            start = middle
        }

   
}


}
export function binary_search_crystal_balls(breaks:boolean[]):number{
    console.log(breaks.length)
    let jump_amount = Math.floor(Math.sqrt( breaks.length))    
    
    for(let i =1 ; i <= Math.sqrt(breaks.length);i++){
        i
        let jump_times  = jump_amount*i
        let searched_value  = breaks[jump_times-1]
        if(searched_value){
            console.log(breaks[i])
         for(let i =jump_times - jump_amount ; i <= jump_times;i++){
            if(breaks[i]){
                
                return i
            }
         }
        }

    }
    



    return -1
}
export function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount)   
 {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

const list = [false,false,false,false,false,false,false,false,false,false,false,false,true,true,true]
console.log(binary_search([1,2,3,4,5,6,7,8,9],8))
console.log(binary_search_crystal_balls(list))
console.log(two_crystal_balls(list))

