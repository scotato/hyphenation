import Character from "./character";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 32,
          gap: 32,
          maxWidth: "100%",
          height: "100%",
        }}
      >
        <Character showMetadata />
      </div>
    </main>
  );
}
