export const part1 = (lines: string[]) => {
    return lines.reduce((prev, curr) => {
        const pairs = curr.split(",").map((range) => range.split('-').map((num) => parseInt(num))) as [[number, number], [number, number]]
        return prev + ((pairs[0][0] <= pairs[1][0] && pairs[0][1] >= pairs[1][1]) || (pairs[1][0] <= pairs[0][0] && pairs[1][1] >= pairs[0][1]) ? 1 : 0)
    }, 0)
}

export const part2 = (lines: string[]) => {
    return lines.reduce((prev, curr) => {
        const pairs = curr.split(",").map((range) => range.split('-').map((num) => parseInt(num))) as [[number, number], [number, number]]
        return prev + ((pairs[0][0] >= pairs[1][0] && pairs[0][0] <= pairs[1][1]) || (pairs[1][0] >= pairs[0][0] && pairs[1][0] <= pairs[0][1]) ? 1 : 0)
    }, 0)
}