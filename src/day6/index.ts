export const part1 = (lines: string[]) => {
    return [...lines[0]]
        .slice(0, -4)
        .map((_char, index) => (new Set([...lines[0].slice(index, index + 4)])).size === 4)
        .findIndex((bool) => bool) + 4
}

export const part2 = (lines: string[]) => {
    return [...lines[0]]
        .slice(0, -14)
        .map((_char, index) => (new Set([...lines[0].slice(index, index + 14)])).size === 14)
        .findIndex((bool) => bool) + 14
}