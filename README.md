# romaine-components

Component library for use with <a href="https://www.npmjs.com/package/romaine">romaine</a>

# Installation

`$ npm i romaine-components`

# Example

```ts
import { useEffect, useState, useMemo } from "react";
import { RomaineExample } from "romaine-components/example";
import { Romaine } from "romaine";

function App() {
  const [blob, setBlob] = useState<Blob | null>(null);
  const image = useMemo(
    () => `https://source.unsplash.com/random?unique=${Math.random()}`,
    []
  );
  useEffect(() => {
    if (blob !== null) {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.png"); //or any other extension
      document.body.appendChild(link);
      link.click();
    }
  }, [blob]);

  return (
    <div className="App">
      <Romaine angle={90}>
        <RomaineExample
          imageExportOptions={{ type: "image/jpeg", quality: 0.92 }}
          setBlob={setBlob}
          image={image}
        />
      </Romaine>
    </div>
  );
}

export default App;
```
