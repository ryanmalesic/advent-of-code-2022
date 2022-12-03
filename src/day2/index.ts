const SCORES_1: Record<string, Record<string, number>> = {
    A: { X: 1 + 3, Y: 2 + 6, Z: 3 + 0 },
    B: { X: 1 + 0, Y: 2 + 3, Z: 3 + 6 },
    C: { X: 1 + 6, Y: 2 + 0, Z: 3 + 3 }
}

const SCORES_2: Record<string, Record<string, number>> = {
    A: { X: 3 + 0, Y: 1 + 3, Z: 2 + 6 },
    B: { X: 1 + 0, Y: 2 + 3, Z: 3 + 6 },
    C: { X: 2 + 0, Y: 3 + 3, Z: 1 + 6 }
}

export const part1 = (lines: string[]) => {
    return lines.reduce<number>((prev, curr) => {
        const [opp, me] = curr.split(" ")
        return prev + SCORES_1[opp][me]
    }, 0)
}

export const part2 = (lines: string[]) => {
    return lines.reduce<number>((prev, curr) => {
        const [opp, me] = curr.split(" ")
        return prev + SCORES_2[opp][me]
    }, 0)
}