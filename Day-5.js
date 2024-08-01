var canPlaceFlowers = function(flowerbed, n) {
    // let counter = 0
    // for(let i =0 ; i <flowerbed.length ; i++){
    //     if(flowerbed[i] + flowerbed[i-1] + flowerbed[i+1] === 0){
    //         counter++
    //     }
    // }
    // return counter >= n 

    const insertOne = (array) => {
        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1] === 0) {
                array[i] = 1
                counter++
                break
            }
            return counter
        }
        console.log(counter)
        insertOne(array)


    }







};
const array = [1, 0, 0, 0, 0, 1]

console.log(canPlaceFlowers(array, 1))