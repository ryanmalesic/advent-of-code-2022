import { part1, part2 } from "."
import { getLines } from "../utils/lines"

describe("part 1", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part1(getLines(10, "example.txt"))
        expect(result).toBe(13_140)
    })

    it("computes the correct answer when provided the input", () => {
        const result = part1(getLines(10))
        expect(result).toBe(14_920)
    })
})

describe("part 2", () => {
    it("computes the correct answer when provided the example", () => {
        const result = part2(getLines(10, "example.txt"))
        expect(result).toBe("##..##..##..##..##..##..##..##..##..##..###...###...###...###...###...###...###.####....####....####....####....####....#####.....#####.....#####.....#####.....######......######......######......###########.......#######.......#######.....")
    })

    it("computes the correct answer when provided the input", () => {
        const result = part2(getLines(10))
        expect(result).toBe('###..#..#..##...##...##..###..#..#.####.#..#.#..#.#..#.#..#.#..#.#..#.#..#....#.###..#..#.#....#..#.#....###..#..#...#..#..#.#..#.#....####.#....#..#.#..#..#...#..#.#..#.#..#.#..#.#..#.#..#.#..#.#....###...##...##..#..#..##..###...##..####.')
    })
})