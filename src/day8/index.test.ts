import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(8, "example.txt"))
        expect(result).toBe(21)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(8))
        expect(result).toBe(1_825)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(8, "example.txt"))
        expect(result).toBe(8)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(8))
        expect(result).toBe(235_200)
    })
})