import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(1, "example.txt"))
        expect(result).toBe(24_000)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(1))
        expect(result).toBe(69_289)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(1, "example.txt"))
        expect(result).toBe(45_000)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(1))
        expect(result).toBe(205_615)
    })
})