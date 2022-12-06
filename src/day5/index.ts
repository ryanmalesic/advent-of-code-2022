function parseLine(line: string): string[] {
    if (line.startsWith("move")) {
        const cnt = /move (\d+)/
        const from = /from (\d+)/
        const to = /to (\d+)/
        return [line.match(cnt)![1]!, line.match(from)![1]!, line.match(to)![1]!]
    } else {
        return [...line].filter((_char, index) => (index - 1) % 4 === 0)
    }
}

export const part1 = (lines: string[]) => {
    const divide = lines.findIndex(line => line.length === 0)
    const stacks = lines.slice(0, divide - 1).map(parseLine).reduce((prev, curr) =>
        prev.length === 0 ? [...curr] : prev.map((char, index) => (curr[index] + char).trimEnd()), [])
    const instructions = lines.slice(divide + 1).map(line => parseLine(line).map(num => parseInt(num) - 1))

    instructions.forEach(([cnt, from, to]) => {
        stacks[to] = stacks[to].trimEnd() + [...stacks[from].slice(stacks[from].length - cnt - 1)].reverse().join("")
        stacks[from] = stacks[from].slice(0, stacks[from].length - cnt - 1).trimEnd()
    })

    return stacks.reduce((prev, curr) => prev + curr[curr.length - 1], "")
}

export const part2 = (lines: string[]) => {
    const divide = lines.findIndex(line => line.length === 0)
    const stacks = lines.slice(0, divide - 1).map(parseLine).reduce((prev, curr) =>
        prev.length === 0 ? [...curr] : prev.map((char, index) => (curr[index] + char).trimEnd()), [])
    const instructions = lines.slice(divide + 1).map(line => parseLine(line).map(num => parseInt(num) - 1))

    instructions.forEach(([cnt, from, to]) => {
        stacks[to] = stacks[to].trimEnd() + stacks[from].slice(stacks[from].length - cnt - 1)
        stacks[from] = stacks[from].slice(0, stacks[from].length - cnt - 1).trimEnd()
    })

    return stacks.reduce((prev, curr) => prev + curr[curr.length - 1], "")
}