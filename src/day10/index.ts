type Instruction = ["noop", never] | ["addx", string]

function go(lines: string[]) {
    return lines.reduce<[number, number, number, string]>((prev, curr) => {
        let [cycle, x, sum, crt] = prev
        const instruction = curr.split(" ") as Instruction

        crt += Math.abs((cycle - 1) % 40 - x) <= 1 ? "#" : "."
        cycle += 1
        if ((cycle - 20) % 40 === 0) {
            sum += x * cycle
        }

        if (instruction[0] === "addx") {
            crt += Math.abs((cycle - 1) % 40 - x) <= 1 ? "#" : "."
            cycle += 1
            x += parseInt(instruction[1])
            if ((cycle - 20) % 40 === 0) {
                sum += x * cycle
            }
        }

        return [cycle, x, sum, crt]
    }, [1, 1, 0, ""])
}

export const part1 = (lines: string[]) => {
    const [_cycle, _x, sum, _crt] = go(lines)
    return sum
}

export const part2 = (lines: string[]) => {
    const [_cycle, _x, _sum, crt] = go(lines)
    return crt
}