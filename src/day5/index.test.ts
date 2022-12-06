import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(5, "example.txt"))
        expect(result).toBe("CMZ")
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(5))
        expect(result).toBe("TPGVQPFDH")
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(5, "example.txt"))
        expect(result).toBe("MCD")
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(5))
        expect(result).toBe("DMRDFRHHH")
    })
})