import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(6, "example.txt"))
        expect(result).toBe(7)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(6))
        expect(result).toBe(1300)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(6, "example.txt"))
        expect(result).toBe(19)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(6))
        expect(result).toBe(3986)
    })
})