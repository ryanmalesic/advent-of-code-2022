import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(2, "example.txt"))
        expect(result).toBe(15)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(2))
        expect(result).toBe(11_063)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(2, "example.txt"))
        expect(result).toBe(12)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(2))
        expect(result).toBe(10_349)
    })
})