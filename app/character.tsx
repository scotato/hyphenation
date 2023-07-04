"use client";
import { useState, useEffect } from "react";

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

const mouths = ["-"];

const arms = [
  ["/", "\\"],
  ["<", ">"],
  ["~", "~"],
  ["{", "}"],
  ["J", "L"],
  ["2", "7"],
];

const bodies = [
  ["[", "]"],
  ["(", ")"],
];

const chests = [" ", ":", "*", "=", "."];

const legs = [
  ["|", "|"],
  ["/", "|"],
  ["|", "\\"],
  ["/", "\\"],
];

const feet = [["_", "_"]];

export default function Character() {
  const [didMount, setDidMount] = useState(false);
  const [headLeft, headRight] = randomFromArray(heads);
  const [eyeLeft, eyeRight] = randomFromArray(eyes);
  const mouth = randomFromArray(mouths);
  const [armLeft, armRight] = randomFromArray(arms);
  const [bodyLeft, bodyRight] = randomFromArray(bodies);
  const chest = randomFromArray(chests);
  const [legLeft, legRight] = randomFromArray(legs);
  const [footLeft, footRight] = randomFromArray(feet);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (!didMount) return null;

  return (
    <svg viewBox="0 0 64 64">
      <rect x="0" y="0" width="64" height="64" fill="white" />
      <text x="24" y="28px" fontSize={4} fontWeight={900}>
        {headLeft}
        {eyeLeft}
        {mouth}
        {eyeRight}
        {headRight}
      </text>
      <text x="24" y="34px" fontSize={4} fontWeight={900}>
        {armLeft}
        {bodyLeft}
        {chest}
        {bodyRight}
        {armRight}
      </text>
      <text x="24" y="40px" fontSize={4} fontWeight={900}>
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
