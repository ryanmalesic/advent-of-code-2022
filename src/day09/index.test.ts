import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(9, "example.txt"))
        expect(result).toBe(13)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(9))
        expect(result).toBe(6_284)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(9, "example.txt"))
        expect(result).toBe(1)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(9))
        expect(result).toBe(2661)
    })
})