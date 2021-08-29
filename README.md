# romaine-components

Component library for use with <a href="https://www.npmjs.com/package/romaine">romaine</a>

# Installation

`$ npm i romaine-components`

# Example

```ts
import { useEffect, useState } from "react";
import "./App.css";
//@ts-ignore
import { RomaineExample } from "romaine-components";

function App() {
  const [blob, setBlob] = useState<Blob | null>(null);

  useEffect(() => {
    if (blob !== null) {
      // create an url image with an anchor tag that can be clicked to download it
      // finally use javascript to click the link so the download begins
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
      <Romaine>
        <RomaineExample
          setBlob={setBlob}
          image="https://source.unsplash.com/random"
        />
      </Romaine>
    </div>
  );
}

export default App;
```
