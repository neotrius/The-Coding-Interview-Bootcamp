// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2)
//     for (let row = 0; row < n; row++) {
//         let level = ''
//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }

function pyramid(n) {
    const rowLength = n + n - 1
    const middlePoint = Math.floor(rowLength / 2)
    for (let i = 0, j = n; i < n; i++, j--) {
        const part1 = ' '.repeat(middlePoint - i)
        const part2 = '#'.repeat(i * 2 + 1)
        const output = part1 + part2 + part1
        console.log(output)
    }
}

module.exports = pyramid
