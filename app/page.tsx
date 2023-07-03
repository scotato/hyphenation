import Character from "./character";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
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
