import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(3, "example.txt"))
        expect(result).toBe(157)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(3))
        expect(result).toBe(8_109)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(3, "example.txt"))
        expect(result).toBe(70)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(3))
        expect(result).toBe(2_738)
    })
})