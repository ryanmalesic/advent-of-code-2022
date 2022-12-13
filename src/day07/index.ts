import get from "lodash.get"
import set from "lodash.set"

type T = { [key: string]: number } | { [key: string]: T }

function treeify(lines: string[]): T {
    let tree: T = {}
    let path: string[] = []

    lines.forEach((line) => {
        if (line === '$ cd /') {
            path = []
        } else if (line.startsWith('$ cd ..')) {
            path.pop()
        } else if (line.startsWith('$ cd')) {
            path.push(line.split(" ")[2])
        } else if (line.startsWith('$ ls')) {
            return
        } else if (line.startsWith("dir")) {
            set(tree, [...path, line.split(" ")[1]], get(tree, [...path, line.split(" ")[1]], {}))
        } else {
            set(tree, [...path, line.split(" ")[1]], parseInt(line.split(" ")[0]))
        }
    })

    return tree
}

function calcDirSizes(tree: T, dir: string, dirs: Record<string, number>): number {
    const size = Object.entries(tree).reduce<number>((prev, curr) =>
        typeof curr[1] === 'number' ? prev + curr[1] : prev + calcDirSizes(curr[1], dir + curr[0] + "/", dirs), 0)
    dirs[dir] = size
    return size
}

export const part1 = (lines: string[]) => {
    const tree = treeify(lines)
    const dirs: { [key: string]: number } = {}
    calcDirSizes(tree, "/", dirs)

    return Object.values(dirs).filter((size) => size <= 100000).reduce((a, b) => a + b, 0)
}

export const part2 = (lines: string[]) => {
    const tree = treeify(lines)
    const dirs: { [key: string]: number } = {}
    calcDirSizes(tree, "/", dirs)

    return Object.values(dirs).sort((a, b) => a - b).find((entry) => entry >= 30_000_000 - (70_000_000 - dirs["/"]))
}