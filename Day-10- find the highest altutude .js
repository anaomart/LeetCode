var largestAltitude = function(gain) {
    let max = 0
    let alt = [0]
    for (let i = 0; i < gain.length; i++) {
        const newAlt = alt[i] + gain[i]
        alt.push(newAlt)
        if (newAlt > max)
            max = newAlt
    }
    return max
};