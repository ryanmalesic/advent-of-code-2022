const DIR_MAP = {
    "L": [-1, 0],
    "U": [0, -1],
    "R": [1, 0],
    "D": [0, 1]
} as const

type Pos = [number, number]

function diff(head: Pos, tail: Pos): Pos {
    return [head[0] - tail[0], head[1] - tail[1]]
}

function chain(lines: string[], startChain: Pos[]) {
    let chain: Pos[] = [...startChain]
    const seen = new Set<string>()

    lines.forEach((line) => {
        const [dir, numStr] = line.split(" ")
        const direction = DIR_MAP[dir as keyof typeof DIR_MAP]
        const magnitude = parseInt(numStr)

        const steps = [...Array(magnitude).keys()]
        steps.forEach((_) => {
            chain[0] = [chain[0][0] + direction[0], chain[0][1] + direction[1]]

            const links = [...Array(chain.length).keys()].slice(1)
            links.forEach((link) => {
                const difference = diff(chain[link - 1], chain[link])
                if (difference[0] === 2 && difference[1] === 0) {
                    chain[link] = [chain[link][0] + 1, chain[link][1]]
                } else if (difference[0] === 0 && difference[1] == 2) {
                    chain[link] = [chain[link][0], chain[link][1] + 1]
                } else if (difference[0] === -2 && difference[1] == 0) {
                    chain[link] = [chain[link][0] - 1, chain[link][1]]
                } else if (difference[0] === 0 && difference[1] == -2) {
                    chain[link] = [chain[link][0], chain[link][1] - 1]
                } else if ((difference[0] === 2 && difference[1] === -1) || (difference[0] === 2 && difference[1] === -2) || (difference[0] === 1 && difference[1] === -2)) {
                    chain[link] = [chain[link][0] + 1, chain[link][1] - 1]
                } else if ((difference[0] === 2 && difference[1] === 1) || (difference[0] === 2 && difference[1] === 2) || (difference[0] === 1 && difference[1] === 2)) {
                    chain[link] = [chain[link][0] + 1, chain[link][1] + 1]
                } else if ((difference[0] === -2 && difference[1] === 1) || (difference[0] === -2 && difference[1] === 2) || (difference[0] === -1 && difference[1] === 2)) {
                    chain[link] = [chain[link][0] - 1, chain[link][1] + 1]
                } else if ((difference[0] === -2 && difference[1] === -1) || (difference[0] === -2 && difference[1] === -2) || (difference[0] === -1 && difference[1] === -2)) {
                    chain[link] = [chain[link][0] - 1, chain[link][1] - 1]
                } else {
                    return
                }
            })

            seen.add(JSON.stringify(chain[chain.length - 1]))
        })
    })

    return seen.size
}

export const part1 = (lines: string[]) => {
    return chain(lines, [[0, 0], [0, 0]])
}

export const part2 = (lines: string[]) => {
    return chain(lines, [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
}