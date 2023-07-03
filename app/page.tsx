import { useState, useEffect } from "react";
import Character from "./character";

export default function Home() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (!didMount) return null;

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
