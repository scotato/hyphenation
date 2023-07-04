import Character from "./character";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          padding: 32,
          aspectRatio: "1/1",
          maxWidth: "100%",
          height: "100%",
        }}
      >
        <Character />
      </div>
    </main>
  );
}
