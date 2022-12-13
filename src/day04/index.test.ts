import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(4, "example.txt"))
        expect(result).toBe(2)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(4))
        expect(result).toBe(413)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(4, "example.txt"))
        expect(result).toBe(4)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(4))
        expect(result).toBe(806)
    })
})