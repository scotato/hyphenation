"use client";

const heads = [
  ["|", "|"],
  ["[", "]"],
  ["(", ")"],
];

const eyes = [
  ["*", "*"],
  ["$", "$"],
  ["z", "z"],
  [".", "."],
  ["o", "o"],
  ["o", "O"],
  ["O", "o"],
  ["O", "O"],
  ["0", "0"],
  ["@", "@"],
  ["#", "#"],
  ["+", "+"],
  ["'", "'"],
  ["”", "”"],
  ["^", "^"],
  ["=", "="],
  ["-", "-"],
  ["T", "T"],
  ["x", "x"],
  ["X", "X"],
];

const mouths = ["_", "."];

const arms = [
  ["/", "\\"],
  ["\\", "/"],
  ["\\", "/"],
  ["-", "-"],
  ["<", ">"],
  ["~", "~"],
  ["J", "L"],
  ["!", "!"],
  ["q", "p"],
  ["2", "7"],
];

const bodies = [
  ["[", "]"],
  ["{", "}"],
  ["(", ")"],
];

const chests = [" ", ":", "Y"];

const legs = [
  ["|", "|"],
  ["/", "|"],
  ["|", "\\"],
  ["/", "\\"],
];

const feet = [["_", "_"]];

export default function Character() {
  const [headLeft, headRight] = randomFromArray(heads);
  const [eyeLeft, eyeRight] = randomFromArray(eyes);
  const mouth = randomFromArray(mouths);
  const [armLeft, armRight] = randomFromArray(arms);
  const [bodyLeft, bodyRight] = randomFromArray(bodies);
  const chest = randomFromArray(chests);
  const [legLeft, legRight] = randomFromArray(legs);
  const [footLeft, footRight] = randomFromArray(feet);

  return (
    <svg viewBox="0 0 32 32">
      <text x="4" y="10px" fontSize={8} fontWeight={900}>
        {headLeft}
        {eyeLeft}
        {mouth}
        {eyeRight}
        {headRight}
      </text>
      <text x="4" y="18px" fontSize={8} fontWeight={900}>
        {armLeft}
        {bodyLeft}
        {chest}
        {bodyRight}
        {armRight}
      </text>
      <text x="4" y="26px" fontSize={8} fontWeight={900}>
        {footLeft}
        {legLeft} {legRight}
        {footRight}
      </text>
    </svg>
  );
}

function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
