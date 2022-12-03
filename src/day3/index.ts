import chunk from "lodash.chunk"

function isLowerCase(str: string) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

export const part1 = (lines: string[]) => {
    return lines.reduce((prev, curr) => {
        const half1 = curr.slice(0, curr.length / 2)
        const half2 = curr.slice(curr.length / 2)
        const shared = [...half1].find((l) => half2.includes(l))!
        return prev + (isLowerCase(shared) ? shared.charCodeAt(0) - 96 : shared.charCodeAt(0) - 38)
    }, 0)
}

export const part2 = (lines: string[]) => {
    return chunk(lines, 3).reduce((prev, curr)=>{
        const shared = [...curr[0]].find((l) => curr[1].includes(l) && curr[2].includes(l))!
        return prev + (isLowerCase(shared) ? shared.charCodeAt(0) - 96 : shared.charCodeAt(0) - 38) 
    }, 0)
}