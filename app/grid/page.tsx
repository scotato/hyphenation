import Character from "../character";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 32,
          gap: 32,
          maxWidth: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 32,
            maxWidth: "100%",
            height: "100%",
          }}
        >
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            maxWidth: "100%",
            height: "100%",
          }}
        >
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            maxWidth: "100%",
            height: "100%",
          }}
        >
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
        </div>
      </div>
    </main>
  );
}
