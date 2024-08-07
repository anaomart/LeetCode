var uniqueOccurrences = function(arr) {
    const table = new Map()
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (table.has[arr[i]]) {
            table[arr[i]]++
        } else {
            table[arr[i]] = 1
        }
    }
    const uniqueOccurrences = [...new Set(Object.values(table))]
    table
    uniqueOccurrences
    return uniqueOccurrences.length === Object.values(table).length
}
console.log(uniqueOccurrences([1, 2, 1, 2, 1, 3, 2]))