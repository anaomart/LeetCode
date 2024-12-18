function equalPairs(grid: number[][]): number {
    
    let columns:number[][] = [[]]
    let len = grid.length

    console.log(grid)
    let counter =0
    for(let i =0 ; i < len ; i++){
        let arr:number[] =[]
        for(let j =0 ; j<len ; j++){
            arr.push(grid[j][i])
            
        }
        columns.push(arr)
    }
    
    console.log(columns[1].join('') ,grid[0].join(''))
    console.log(columns)
    for(let i =0 ; i < len ; i++){
        for(let j =0 ; j<len ; j++){
            if(grid[i].join('.') == columns[j+1].join('.')) {
               
                counter++
            }
        }
    }


    return counter

};

console.log(equalPairs([[11,1],[1,11]]))