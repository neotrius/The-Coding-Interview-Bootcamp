let n = 4
let str = '#'.repeat(n)

for (let i = 1, j = n; i <= n; i++, j--) {
    let part1 = '#'.repeat(i)
    let part2 = ' '.repeat(j - 1)
    console.log(part1, part2)
}

