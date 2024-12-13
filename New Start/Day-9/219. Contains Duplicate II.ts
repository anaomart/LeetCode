function longestOnes(nums: number[], k: number): number {
    let list:number[] = [];
    let max = 0;
    let left =0 ;
    let right =0 ;

    while(right <= nums.length){

        max = Math.max(max, list.length)
        if(nums[right]){
            list.push(nums[right]);
            right++;
        }else if (!nums[right]){
            
            if(k > 0)
            {
                k--;
                list.push(nums[right]);
                right++;
            }else if(k <= 0){
                let out = list.shift()

                if(out ==1 ){         
                   left++
                }else if (out == 0){

                    k++;
                }else{

                    right++
                    left++
                }
            }
        }





    }
    
    return max

};