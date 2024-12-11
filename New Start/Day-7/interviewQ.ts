class Q {
    public set = new Set()

    
    public insert(value){
        this.set.add(value)
    }
    public remove(value){
        this.set.delete(value)
    }
    public getRandom(){
        const randomNumber = Math.floor( Math.random() * this.set.size) 
        const setToArr = Array.from(this.set)

        console.log(setToArr[randomNumber])             
                  
    }                                                    
                                                  
    public print(){
        console.log({set:this.set})
    }
    

}
const test = new Q()
test.insert("omar")
test.insert("test")
test.insert("hello")
console.log(test)
test.getRandom()
console.log(test)