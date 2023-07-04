"use client";
import { useState, useEffect, Fragment } from "react";

const ROWS = 11;
const COLS = 23;
const FONTSIZE = 8;
const FONTWEIGHT = 900;
const CELLWIDTH = (FONTSIZE * 3) / 4;
const CELLHEIGHT = (FONTSIZE * 3) / 2;
const CANVASPADDINGX = 8;
const CANVASPADDINGY = 8;
const CANVASWIDTH = COLS * CELLWIDTH + CANVASPADDINGX * 2;
const CANVASHEIGHT = ROWS * CELLHEIGHT + CANVASPADDINGY * 2;

const COLORGRAY = "#A9BFD7";
const COLORGREEN = "#00BA73";
const COLORLIGHTBLUE = "#00C9FF";
const COLORBLUE = "#0080FF";
const COLORPURPLE = "#AD43ED";
const COLORPINK = "#FE63FF";
const COLORORANGE = "#FF8633";
const COLORRED = "#FE0000";

const characterColors = [
  COLORGRAY,
  COLORGREEN,
  COLORLIGHTBLUE,
  COLORBLUE,
  COLORPURPLE,
  COLORPINK,
  COLORORANGE,
  COLORRED,
];

const colorDict = {
  [COLORGRAY]: "gray",
  [COLORGREEN]: "green",
  [COLORLIGHTBLUE]: "light-blue",
  [COLORBLUE]: "blue",
  [COLORPURPLE]: "purple",
  [COLORPINK]: "pink",
  [COLORORANGE]: "orange",
  [COLORRED]: "red",
};

const heads = [
  ["|", "|"],
  ["[", "]"],
  ["(", ")"],
  ["{", "}"],
];

const eyes = [
  "*",
  "$",
  "z",
  ".",
  "o",
  "O",
  "0",
  "#",
  "+",
  "'",
  '"',
  "^",
  "=",
  "-",
  "T",
  "x",
  "X",
];

const mouths = ["-"];

const hats = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "~",
  "+",
  "-",
  "'",
  ".",
  "=",
];

const arms = [
  ["/", "\\"],
  ["<", ">"],
  ["~", "~"],
  ["J", "L"],
  ["2", "7"],
];

const bodies = [
  ["[", "]"],
  ["(", ")"],
  ["{", "}"],
];

const chests = [" ", ":", "*", "=", "."];

const legs = [
  ["|", "|"],
  ["/", "|"],
  ["|", "\\"],
  ["/", "\\"],
];

const feet = [["_", "_"]];

const backgrounds = ["-", "=", "+", "*", "#", "/", "\\", "|", "·"];

const firstText = ["O", "N"];
const lastText = ["C", "H", "A", "I", "N"];

const hobbies = [
  "rock-climbing",
  "blog-writing",
  "photo-editing",
  "code-learning",
  "guitar-playing",
  "bee-keeping",
  "bird-watching",
  "chess-playing",
  "home-brewing",
  "yoga-practicing",
  "thrift-shopping",
  "poetry-writing",
  "furniture-restoring",
  "stamp-collecting",
  "language-learning",
  "astro-photography",
  "pottery-making",
  "jewelry-designing",
  "bread-baking",
  "drone-racing",
  "soap-crafting",
  "graphic-designing",
  "puzzle-solving",
  "movie-reviewing",
  "marathon-running",
  "comic-booking",
  "metal-detecting",
  "game-streaming",
  "meditation-practicing",
  "candle-making",
  "vinyl-collecting",
];

const namePrefix = [
  "rocky",
  "blogger",
  "pixel",
  "coder",
  "strumming",
  "bee",
  "feather",
  "checkmate",
  "brewer",
  "yoga",
  "thrifty",
  "poetic",
  "green",
  "restore",
  "philatelic",
  "lingual",
  "astro",
  "potter",
  "jewel",
  "baker",
  "drone",
  "suds",
  "design",
  "puzzle",
  "critic",
  "marathon",
  "comic",
  "metal",
  "streamer",
  "meditative",
  "candle",
  "vinyl",
];

const nameSuffix = [
  "climber",
  "byte",
  "picasso",
  "craft",
  "sam",
  "buzz",
  "finder",
  "chuck",
  "bob",
  "yogi",
  "tina",
  "pen",
  "thumbs",
  "roy",
  "phil",
  "linda",
  "ace",
  "pat",
  "jay",
  "breadley",
  "daredevil",
  "suzie",
  "duke",
  "paul",
  "cris",
  "mike",
  "cassie",
  "mary",
  "steve",
  "matt",
  "cara",
  "vera",
];

interface CharacterProps {
  patternColor?: string;
  backgroundColor?: string;
  showMetadata?: boolean;
}

export default function Character({
  patternColor = "rgba(0, 0, 0, 0.05)",
  backgroundColor = "white",
  showMetadata,
}: CharacterProps) {
  const [didMount, setDidMount] = useState(false);
  const { matrix: character, metadata } = randomCharacter();
  const color = randomFromArray(characterColors);
  const background = randomFromArray(backgrounds);
  const invertMode = Math.random() > 0.9;
  const chaosBackgroundMode = Math.random() > 0.75;
  const intensityBackgroundMode = Math.random() > 0.75;
  const intensityBackground = Math.random();
  const hobby = randomFromArray(hobbies);
  const name = `${randomFromArray(namePrefix)}-${randomFromArray(nameSuffix)}`;

  // center the 2d character matrix on the 2d canvas matrix
  const x = Math.floor((COLS - character[0].length) / 2);
  const y = Math.floor((ROWS - character.length) / 2);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (!didMount) return null;

  return (
    <>
      <svg viewBox={`0 0 ${CANVASWIDTH} ${CANVASHEIGHT}`}>
        <rect
          x="0"
          y="0"
          width={CANVASWIDTH}
          height={CANVASHEIGHT}
          fill={invertMode ? color : backgroundColor}
        />
        {Array.from({ length: ROWS }, (_, row) => (
          <Fragment key={row}>
            {Array.from({ length: COLS }, (_, col) => {
              // if its intensityBackgroundMode, we roll a dice and see if its less than the intensityBackground
              const isCharacterPart =
                row >= y &&
                row < y + character.length &&
                col >= x &&
                col < x + character[0].length;
              const characterPart = isCharacterPart
                ? character[row - y][col - x]
                : "";
              let symbol =
                characterPart ||
                (intensityBackgroundMode
                  ? Math.random() < intensityBackground
                    ? chaosBackgroundMode
                      ? randomFromArray(backgrounds)
                      : background
                    : ""
                  : chaosBackgroundMode
                  ? randomFromArray(backgrounds)
                  : background);

              // logic to set the symbol to the characters in firstText if its the first row and lastText if its the last row
              if (row === 0) {
                symbol = firstText[col] || symbol;
              } else if (row === ROWS - 1 && col > col - lastText.length) {
                symbol = lastText[lastText.length - COLS + col] || symbol;
              }

              return (
                <text
                  x={col * CELLWIDTH + CELLWIDTH / 2 + CANVASPADDINGX}
                  y={row * CELLHEIGHT + CELLHEIGHT / 2 + CANVASPADDINGY}
                  fontSize={FONTSIZE}
                  fontWeight={FONTWEIGHT}
                  fill={
                    characterPart
                      ? invertMode
                        ? backgroundColor
                        : color
                      : patternColor
                  }
                  textAnchor="middle"
                  dominantBaseline="middle"
                  key={`${row}-${col}`}
                >
                  {symbol}
                </text>
              );
            })}
          </Fragment>
        ))}
      </svg>
      {showMetadata && (
        <div
          style={{
            fontSize: 16,
            width: 260,
            flexShrink: 0,
            flexGrow: 0,
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <pre>
            <code>
              {JSON.stringify(
                {
                  name,
                  role: invertMode ? "main-character" : "npc",
                  team: colorDict[color as keyof typeof colorDict],
                  vibe: background,
                  demeanor: intensityBackgroundMode
                    ? "extroverted"
                    : "introverted",
                  temperament: chaosBackgroundMode ? "chaotic" : "chill",
                  hobby,
                  rizz: Number(intensityBackground.toFixed(2)) * 100,
                  character: metadata,
                },
                null,
                2
              )}
            </code>
          </pre>
        </div>
      )}
    </>
  );
}

function randomCharacter() {
  const hasHat = Math.random() > 0.75;
  const hasChest = Math.random() > 0.5;
  const [headLeft, headRight] = randomFromArray(heads);
  const eye = randomFromArray(eyes);
  const mouth = randomFromArray(mouths);
  const hat = hasHat ? randomFromArray(hats) : "";
  const [armLeft, armRight] = randomFromArray(arms);
  const [bodyLeft, bodyRight] = randomFromArray(bodies);
  const chest = hasChest ? randomFromArray(chests) : "";
  const [legLeft, legRight] = randomFromArray(legs);
  const [footLeft, footRight] = randomFromArray(feet);

  return {
    metadata: {
      hat: hat ? `  ${hat}  ` : "none",
      face: ` ${eye}${mouth}${eye} `,
      head: `${headLeft}   ${headRight}`,
      arms: `${armLeft}   ${armRight}`,
      body: ` ${bodyLeft} ${bodyRight} `,
      emblem: chest || "none",
      legs: `${footLeft}${legLeft}   ${legRight}${footRight}`,
    },
    matrix: [
      ["", "", hat, "", ""],
      [headLeft, eye, mouth, eye, headRight],
      [armLeft, bodyLeft, chest, bodyRight, armRight],
      [footLeft, legLeft, "", legRight, footRight],
    ],
  };
}

function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
