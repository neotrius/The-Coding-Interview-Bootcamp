// '    #    ' 1
// '   ###   ' 3
// '  #####  ' 5
// ' ####### ' 7
// '#########' 9 cat , the one who lives more than anything else, eagle,


let n = 5
const rowLength = n + n - 1
const middlePoint = Math.floor(rowLength / 2)

for (let i = 0, j = n; i < n; i++, j--) {
    console.log(i, middlePoint, j)

    const part1 = '_'.repeat(middlePoint - i)
    const part2 = '#'.repeat(i * 2 + 1)
    const output = part1 + part2 + part1
    console.log(output)
}
