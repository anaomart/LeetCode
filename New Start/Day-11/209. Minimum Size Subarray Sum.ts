function minSubArrayLen(target: number, nums: number[]): number {
   
    let left =0 
    let right =0 
    let list:number[] = []
    let sum = 0
    let minL = Number.MAX_VALUE
    while(right <= nums.length) {



        if(target > sum ){
            list.push(nums[right])
            sum += nums[right]
            right++
        }else if(sum >= target) {
            minL = Math.min(list.length ,minL)
            sum -= nums[left]
            list.shift()
            left++
        }

    }
    return minL == Number.MIN_VALUE?0:minL


};