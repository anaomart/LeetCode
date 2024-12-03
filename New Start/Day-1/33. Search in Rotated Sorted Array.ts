
function search(nums: number[], target: number) {
    let l= 0 
    let r = nums.length - 1
    while(l <=r){
        let m = l +  Math.floor((r -l )/2)
        let mv = nums[m]
        let lv = nums[l]
        let rv = nums[r]
        if(mv == target ) return m
        if(rv >mv){
           if(target > mv && target <= rv){
            l = m +1
           }else {
            r = m - 1
           }
        }else{
            if(target < mv && target >= lv) {
                r = m - 1
            }else {
                l = m + 1
            }
        }
    }
    return -1
    
};
const list =  [4,5,6,7,0,1,2]
const target = 0
console.log(search(list, target))
