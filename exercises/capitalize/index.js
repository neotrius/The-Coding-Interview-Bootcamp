// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let output = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') output += str[i].toUpperCase()
        else output += str[i]
    }
    return output
}

// function capitalize(str) {
//     let arr = []
//     for (const el of str.split(' ')) {
//         arr.push(el[0].toUpperCase() + el.slice(1))
//     }
//     return arr.join(' ')
// }

// function capitalize(str) {
//     let arr = str.toLowerCase().split(' ')
//     let output = []
//     arr.forEach(i => {
//         output.push(i[0].toUpperCase() + i.slice(1))
//     })
//     return output.join(' ')
// }

module.exports = capitalize
