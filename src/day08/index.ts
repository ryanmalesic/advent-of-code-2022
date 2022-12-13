function outerMapify(lines: string[]) {
    const grid = lines.map((line) => [...line].map((char) => parseInt(char)))
    return grid.map((row, r) => row.map((_tree, c) => {
        const left = Array.from(Array(c + 1).keys()).map((index) => grid[r][index])
        const leftLargest = Math.max(...left)
        const leftIndex = left.findIndex((t) => t === leftLargest)
        const leftVisible = c === leftIndex

        const top = Array.from(Array(r + 1).keys()).map((index) => grid[index][c])
        const topLargest = Math.max(...top)
        const topIndex = top.findIndex((t) => t === topLargest)
        const topVisible = r === topIndex

        const right = Array.from(Array(grid[0].length - c).keys()).map((index) => grid[r][grid[0].length - index - 1])
        const rightLargest = Math.max(...right)
        const rightIndex = right.findIndex((t) => t === rightLargest)
        const rightVisible = grid[0].length - c - 1 === rightIndex

        const bottom = Array.from(Array(grid.length - r).keys()).map((index) => grid[grid.length - index - 1][c])
        const bottomLargest = Math.max(...bottom)
        const bottomIndex = bottom.findIndex((t) => t === bottomLargest)
        const bottomVisible = grid.length - r - 1 === bottomIndex

        return (leftVisible || topVisible || rightVisible || bottomVisible) ? 1 : 0
    }))
}

function innerMapify(lines: string[]) {
    const grid = lines.map((line) => [...line].map((char) => parseInt(char)))
    return grid.map((row, r) => row.map((tree, c) => {
        const left = Array.from(Array(c + 1).keys()).map((index) => grid[r][index]).slice(0, -1).reverse()
        const leftVisible = countVisible(tree, left)

        const top = Array.from(Array(r + 1).keys()).map((index) => grid[index][c]).slice(0, -1).reverse()
        const topVisible = countVisible(tree, top)

        const right = Array.from(Array(grid[0].length - c).keys()).map((index) => grid[r][grid[0].length - index - 1]).slice(0, -1).reverse()
        const rightVisible = countVisible(tree, right)

        const bottom = Array.from(Array(grid.length - r).keys()).map((index) => grid[grid.length - index - 1][c]).slice(0, -1).reverse()
        const bottomVisible = countVisible(tree, bottom)

        return leftVisible * topVisible * rightVisible * bottomVisible
    }))
}

function countVisible(tree: number, trees: number[]) {
    const index = trees.findIndex(t => t >= tree)
    return (index === -1) ? trees.length : index + 1
}

export const part1 = (lines: string[]) => {
    const map = outerMapify(lines)
    return map.reduce((a, b) => a + b.reduce<number>((a, b) => a + b, 0), 0)
}

export const part2 = (lines: string[]) => {
    const map = innerMapify(lines)
    return Math.max(...map.flat())
}