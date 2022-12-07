import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(7, "example.txt"))
        expect(result).toBe(95_437)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(7))
        expect(result).toBe(1_667_443)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(7, "example.txt"))
        expect(result).toBe(24_933_642)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(7))
        expect(result).toBe(8_998_590)
    })
})