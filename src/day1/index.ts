import { getLines } from "../utils/lines"

const ans1 = Math.max(...getLines(1, "input.txt").reduce<[number, number]>((prev, curr) => {
    return curr.trim().length === 0 ? 
    [Math.max(prev[0], prev[1]), 0] : 
    [prev[0], prev[1] + parseInt(curr)]
}, [Number.MIN_VALUE, 0]))

console.log(ans1)

const ans2 = getLines(1, "input.txt").reduce<[number[], number]>((prev, curr) => {
    return curr.trim().length === 0 ? 
    [[...prev[0], prev[1]].sort((a, b) => a - b).reverse().slice(0, 3), 0] : 
    [prev[0], prev[1] + parseInt(curr)]
}, [[], 0])[0].reduce((prev, curr) => prev + curr, 0)

console.log(ans2)