// function should take an array/string 
function findMatching(array, string) {
    // set iteration to a variable when filter loops through array
    return array.filter(el =>
        // return matching names, case insensitive
         el.toLowerCase() === string.toLowerCase()
         )
}

// function should take an array/string
console.log('array: ', array, 'string: ', string)
    function fuzzyMatch(array, string) {
        // set iteration to a variable when filter loops through array
        let filtered = array.filter(el => 
            // match only beginning letters, ignore middle/ending letters
            el.indexOf(string) === 0
            )
            console.log(filtered)
            return filtered
        
}

function matchName(array, string) {
    let filtered = array.filter(el => 
        el.name === string)
    return filtered
}

