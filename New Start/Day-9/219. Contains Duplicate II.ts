function longestOnes(nums: number[], k: number): number {
    let list:number[] = [];
    let max = 0;
    let left =0 ;
    let right =0 ;
    let KValue = k 
    console.log(right < nums.length)
    while(right <= nums.length){
        console.log(list)
        if(nums[right]){
            list.push(nums[right]);
            right++;
        }else if (!nums[right]){
            
            if(k > 0)
            {
                k--;
                list.push(1);
                right++;
            }else if(k <= 0){
                let out = list.shift()
                console.log(out)
                if(out){
                    continue
                }else{
                    k++;
                }
            }
        }
    }
    
    console.log(max)
    return max

};
console.log("hello")
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); 