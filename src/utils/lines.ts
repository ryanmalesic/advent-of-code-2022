import * as fs from "fs"

export const getLines = (day: number, file: "example.txt" | "input.txt") => {
    const dec = new TextDecoder("utf-8");
    const buffer = fs.readFileSync(`${__dirname}/../day${day}/${file}`)
    const string = dec.decode(new Uint8Array(buffer))
    return string.split("\n")
}