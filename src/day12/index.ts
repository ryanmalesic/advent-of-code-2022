type Pos = [number, number]
type Queue = [number, Pos][]
type Seen = Record<string, number>

const MOVES: Pos[] = [[-1, 0], [0, -1], [1, 0], [0, 1]]

function findEnd(lines: string[]): Pos {
    const er = lines.findIndex((line) => line.includes("E"))
    const ec = lines[er].indexOf("E")
    return [er, ec]
}

function inBounds(pos: Pos, max: Pos) {
    return pos[0] >= 0 && pos[0] < max[0] && pos[1] >= 0 && pos[1] < max[1]
}

function canClimb(from: string, to: string) {
    if (to === "S") { return false }
    if (from === "S") { return to === "a" }
    return (to !== "E" && to.charCodeAt(0) - from.charCodeAt(0) <= 1) || (from === "z" && to === "E")
}

function isShorter(pos: Pos, step: number, seen: Seen) {
    return step + 1 < (seen[JSON.stringify(pos)] ?? Number.POSITIVE_INFINITY)
}

function travel(pos: Pos, step: number, queue: Queue, seen: Seen) {
    seen[JSON.stringify(pos)] = step + 1
    queue.unshift([step + 1, pos])
}

function go(lines: string[], queue: Queue, end: Pos) {
    const max: Pos = [lines.length, lines[0].length]
    const seen: Seen = queue.reduce((a, b) => {
        return { ...a, [JSON.stringify(b)]: 0 }
    }, {})

    while (queue.length > 0) {
        const [step, pos] = queue.pop()!
        const fromStr = lines[pos[0]][pos[1]]

        MOVES
            .map((move) => [pos[0] + move[0], pos[1] + move[1]] as Pos)
            .filter((next) => inBounds(next, max) && canClimb(fromStr, lines[next[0]][next[1]]) && isShorter(next, step, seen))
            .forEach((next) => travel(next, step, queue, seen))
    }

    return seen[JSON.stringify(end)]
}

export const part1 = (lines: string[]) => {
    const sr = lines.findIndex((line) => line.includes("S"))
    const sc = lines[sr].indexOf("S")
    const queue: Queue = [[0, [sr, sc]]]

    return go(lines, queue, findEnd(lines))
}

export const part2 = (lines: string[]) => {
    const queue = lines.reduce<Queue>((a, b, r) => {
        return [...a, ...([...b].map((char, c) => char === 'a' ? [0, [r, c]] : undefined).filter(a => a !== undefined) as Queue)]
    }, [])

    return go(lines, queue, findEnd(lines))
}