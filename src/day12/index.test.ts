import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(12, "example.txt"))
        expect(result).toBe(31)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(12))
        expect(result).toBe(520)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(12, "example.txt"))
        expect(result).toBe(29)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(12))
        expect(result).toBe(508)
    })
})