// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('')
// }
// function reverse(str) {
//     let reversed = ''
//     for (const strElement of str) {
//         reversed = strElement + reversed
//     }
//     return reversed
// }
function reverse(str) {
    return str.split('')
        .reduce((previousValue, currentValue) => currentValue + previousValue, '')
}


module.exports = reverse
