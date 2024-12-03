// // not yet

// var compress = function(chars) {

//     let pointer = 0
//     let currentChar = chars[0]
//     let Counter = 0
//     chars
//     chars.splice(0, 1)
//     chars
//     for (let i = 0; i < chars.length + 1; i++) {
//         console.log(chars[i])
//         if (chars[i] === currentChar) {
//             console.log(chars[i])
//             chars
//             Counter++

//         } else {
//             Counter != 1 && (chars[i - 1] = Counter)
//             currentChar = chars[i]
//             Counter = 1
//         }
//     }
//     chars
// };



var compress = function(chars) {
    let letter = 0
    console.log(chars)
    let s= ''
    const copy = [...chars]
    let count =1
    for(let i =0 ; i < copy.length; i++) {
      console.log(  copy[i] )
      let currentChar = copy[i]
      if(currentChar == copy[i+1]) 
      {
        console.log(currentChar , copy[i+1])
        count++
        count
      }else {

        chars[letter]= copy[i]
        if(count != 1){

            chars[letter+1]= count
        }
        letter = letter + 2
        count
        console.log(  copy[i] )
        count = count == 1 ? '' : count.length > 1 ? count : ''
        s = s + copy[i] + count
        count =1
      }

      count
      chars
    }


return s
}

const chars = ["a"]
console.log(compress(chars))