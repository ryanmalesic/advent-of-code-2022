export const part1 = (lines: string[]) => {
    return Math.max(...lines.reduce<[number, number]>((prev, curr) => {
        return curr.trim().length === 0 ?
            [Math.max(prev[0], prev[1]), 0] :
            [prev[0], prev[1] + parseInt(curr)]
    }, [Number.MIN_VALUE, 0]))
}

export const part2 = (lines: string[]) => {
    return lines.reduce<[number[], number]>((prev, curr) => {
        return curr.trim().length === 0 ?
            [[...prev[0], prev[1]].sort((a, b) => a - b).reverse().slice(0, 3), 0] :
            [prev[0], prev[1] + parseInt(curr)]
    }, [[], 0])[0].reduce((prev, curr) => prev + curr, 0)
}